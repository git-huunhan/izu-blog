import { Image, OverlayTrigger, Popover } from "react-bootstrap";

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
      <div className="lead mb-0">
        <Image
          src={author.avatar}
          className="rounded-circle me-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {author.name}
        {", "}
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
      <h1 className="font-weight-bold blog-detail-header-title mb-0">
        {title}
      </h1>
      <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>

      <Image className="img-fluid" src={coverImage} alt="" />
    </div>
  );
}
