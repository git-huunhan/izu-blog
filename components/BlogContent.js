import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "components/HighlightCode";
import { Image } from "react-bootstrap";
import { urlFor } from "lib/api";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      render: return (
        <div className="container-code">
          <div className="code-filename">{filename}</div>
          <HighlightCode language={language}>
            <div>{code}</div>
          </HighlightCode>
        </div>
      );
    },
    image: ({ node: { asset, alt, position = "center" } }) => {
      render: return (
        <div className={`blog-image blog-image-${position}`}>
          <Image
            src={urlFor(asset).width(400).height(200).fit("max").url()}
            alt="blog-image"
          />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => {
  return <BlockContent serializers={serializers} blocks={content} />;
};

export default BlogContent;
