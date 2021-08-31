import { Image, OverlayTrigger, Popover } from "react-bootstrap";
import Link from "next/link";

import GetTimeAgo from "components/GetTimeAgo";
import GetFullTime from "components/GetFullTime";

export default function BlogHeader({
  title,
  subtitle,
  coverImage,
  author,
  date,
}) {
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

        <div className="d-flex">
          <Image
            src={author.avatar}
            className="rounded-circle me-3"
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
