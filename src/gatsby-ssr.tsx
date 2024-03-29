export const onRenderBody = ({ setHeadComponents }) => {
	const styles = `
.gatsby-remark-link-card__container {
  border: 1px solid #0000001f;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.4s;
  background: #fff;
}

.gatsby-remark-link-card__container:hover {
  background: #f3f4f6;
}

.gatsby-remark-link-card__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16.5px;
  line-height: 1.5;
  text-decoration: none;
}

.gatsby-remark-link-card__main {
  display: flex;
  flex-direction: column;
  height: 128px;
  justify-content: space-between;
  line-height: 1.5;
  padding: 16px;
  width: 100%;
  flex-shrink: 0;
}

.gatsby-remark-link-card__main:has(+ .gatsby-remark-link-card__thumbnail) {
  width: 60%;
}

@media (min-width: 768px) {
  .gatsby-remark-link-card__main:has(+ .gatsby-remark-link-card__thumbnail) {
    width: 70%;
  }
}

.gatsby-remark-link-card__content {}

.gatsby-remark-link-card__title {
  color: #000000dd;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  -webkit-line-clamp: 2;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.gatsby-remark-link-card__description {
  margin-top: 4px;
  color: #77838c;
  font-size: 14px;
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.gatsby-remark-link-card__meta {
  margin-top: 8px;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.gatsby-remark-link-card__favicon {
  height: 14px !important;
  width: 14px !important;
  margin-right: 6px;
  flex-shrink: 0;
}

.gatsby-remark-link-card__url {
  font-size: 12px;
  color: #000000dd;
}

.gatsby-remark-link-card__thumbnail {
  height: 128px;
}

.gatsby-remark-link-card__image {
  margin: 0 !important;
  height: 100% !important;
  width: 100% !important;
  object-fit: cover;
}
`;

	const id = "gatsby-remark-link-card-style";
	const style = (
		<style id={id} key={id} type="text/css">
			{styles}
		</style>
	);

	return setHeadComponents([style]);
};
