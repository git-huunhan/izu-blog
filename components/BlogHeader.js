import { useEffect, useState } from "react";
import { Image, OverlayTrigger, Popover } from "react-bootstrap";
import Link from "next/link";

import GetTimeAgo from "components/GetTimeAgo";
import GetFullTime from "components/GetFullTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export default function BlogHeader({
  title,
  subtitle,
  coverImage,
  author,
  date,
  categories,
}) {
  const [color, setColor] = useState();

  useEffect(() => {
    changeColor();
  }, []);

  const changeColor = () => {
    switch (categories) {
      case "JavaScript":
        setColor("#f1e05a");
        break;
      case "React":
        setColor("#51d2f1");
        break;
      case "Development":
        setColor("#e5858d");
        break;
      default:
        setColor("#fff");
    }
  };

  return (
    <div className="blog-detail-header">
      <div className="lead">
        <div className="mb-4 d-flex">
          <div className="breadcrumbs-item">
            <Link href="/">Home</Link>
          </div>
          <div className="ms-2 me-2">|</div>
          <div>{title}</div>
        </div>

        <h1 className="font-weight-bold blog-detail-header-title mb-0">
          {title}
        </h1>

        <div
          className="category-item d-flex align-items-center mb-3"
          style={{ color: `${color}` }}
        >
          <div>
            <FontAwesomeIcon fixedWidth size="md" icon={faTag} />
          </div>
          <div className="category-blog-detail ms-2">{categories}</div>
        </div>

        <div className="d-flex">
          <Image
            src={author.avatar}
            className="rounded-circle me-3 author-avt"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div className="d-flex flex-column justify-content-center">
            <div className="author-name-blog-content">{author.name}</div>
            <div>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Popover className="popover-date">
                    <GetFullTime date={date} />
                  </Popover>
                }
              >
                <span>
                  <GetTimeAgo date={date} />
                </span>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>

      <h2 className="blog-detail-header-subtitle">{subtitle}</h2>

      <Image className="img-fluid" src={coverImage} alt="" />
    </div>
  );
}
