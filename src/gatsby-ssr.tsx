export const onRenderBody = ({ setHeadComponents }) => {
	const styles = `
.gatsby-remark-simple-link-card__container {
  border: 1px solid rgba(0, 0, 0, .12);
  border-radius: 8px;
  overflow: hidden;
  transition: 0.4s;
  background: #fff;
}

.gatsby-remark-simple-link-card__container:hover {
  background: #f3f4f6;
}

.gatsby-remark-simple-link-card__link {
  display: flex;
  align-items: center;
  font-size: 16.5px;
  line-height: 1.5;
  color: rgba(0,0,0,.82);
  text-decoration: none;
}

.gatsby-remark-simple-link-card__main {
  display: flex;
  flex-direction: column;
  height: 128px;
  justify-content: space-between;
  line-height: 1.5;
  padding: 16px;
  width: 100%;
}

.gatsby-remark-simple-link-card__main:has(+.gatsby-remark-simple-link-card__thumbnail) {
  width: 70%;
}

.gatsby-remark-simple-link-card__content {}

.gatsby-remark-simple-link-card__title {
  color: #000000DD;
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

.gatsby-remark-simple-link-card__description {
  margin-top: 4px;
  color: #77838c;
  font-size: 14px;
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.gatsby-remark-simple-link-card__meta {
  margin-top: 8px;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.gatsby-remark-simple-link-card__favicon {
  height: 14px !important;
  width: 14px !important;
  margin-right: 6px;
  flex-shrink: 0;
}

.gatsby-remark-simple-link-card__url {
  font-size: 12px;
  color: #000000DD;
}

.gatsby-remark-simple-link-card__thumbnail {
  display: block;
  height: 128px !important;
  width: auto !important;
}
`;

	const style = <style type="text/css">{styles}</style>;

	return setHeadComponents([style]);
};
