import client from "open-graph-scraper";
import sanitizeHtml from "sanitize-html";
import { visit } from "unist-util-visit";

const faviconImageSrc = async (url: URL) => {
	const faviconUrl = `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=14`;

	const res = await fetch(faviconUrl, { method: "HEAD" });
	if (!res.ok) return "";

	return faviconUrl;
};

const h = (type: string, attrs = {}, children = []) => {
	return {
		type: "element",
		tagName: type,
		data: {
			hName: type,
			hProperties: attrs,
			hChildren: children,
		},
		properties: attrs,
		children,
	};
};

const text = (value = "") => {
	const sanitized = sanitizeHtml(value);

	return {
		type: "text",
		value: sanitized,
	};
};

const className = (value: string) => {
	const prefix = "gatsby-remark-link-card";
	return `${prefix}__${value}`;
};

const createLinkCardNode = (
	title: string,
	description: string,
	faviconUrl: string,
	url: URL,
	ogImageUrl: string,
) => {
	return h("div", { className: className("container") }, [
		h(
			"a",
			{
				className: className("link"),
				href: url.toString(),
				rel: "noreferrer noopener",
				target: "_blank",
			},
			[
				h("div", { className: className("main") }, [
					h("div", { className: className("content") }, [
						h("div", { className: className("title") }, [text(title)]),
						h("div", { className: className("description") }, [
							text(description),
						]),
					]),
					h("div", { className: className("meta") }, [
						faviconUrl
							? h("img", {
									className: className("favicon"),
									src: faviconUrl,
									width: 14,
									height: 14,
									alt: "favicon",
								})
							: h("div"),
						h("span", { className: className("url") }, [text(url.hostname)]),
					]),
				]),
				ogImageUrl
					? h("div", { className: className("thumbnail") }, [
							h("img", {
								src: ogImageUrl,
								className: className("image"),
								alt: "ogImage",
							}),
						])
					: h("div"),
			],
		),
	]);
};

export default async ({ markdownAST }) => {
	const transformers: (() => Promise<void>)[] = [];
	visit(markdownAST, "paragraph", (paragraphNode, _, parent) => {
		if (
			paragraphNode.data !== undefined ||
			paragraphNode.children.length !== 1 ||
			paragraphNode.children[0].type !== "link" ||
			parent.type !== "root"
		) {
			return markdownAST;
		}

		const linkNode = paragraphNode.children[0];
		if (linkNode.url !== linkNode.children[0].value) {
			return markdownAST;
		}

		transformers.push(async () => {
			try {
				const { result } = await client({ url: linkNode.url });
				const url = new URL(linkNode.url);
				let ogImageUrl = "";

				try {
					ogImageUrl = new URL(result.ogImage[0]?.url ?? "").toString();
				} catch (e) {
					ogImageUrl = "";
				}

				const faviconUrl = await faviconImageSrc(url);
				const linkCard = createLinkCardNode(
					result.ogTitle,
					result.ogDescription,
					faviconUrl,
					url,
					ogImageUrl,
				);
				paragraphNode.children = [linkCard];
			} catch (e) {
				return;
			}
		});
	});

	await Promise.all(transformers.map((t) => t()));

	return markdownAST;
};
