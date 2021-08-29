import { Image, Card, Popover, OverlayTrigger } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "lib/api";
import LinesEllipsis from "react-lines-ellipsis";

const CardItem = ({
  title,
  subtitle,
  timeago,
  fulltime,
  image,
  author,
  link,
}) => {
  return (
    <Card className={`iz-card`}>
      <div className="card-body-wrapper">
        <div className="view overlay">
          {link && (
            <Link {...link}>
              <Card.Img
                src={urlFor(image).height(300).url()}
                height={200}
                draggable="false"
                className="card-img clickable"
                xs={4}
                alt="Card image cap"
              />
            </Link>
          )}
        </div>

        <Card.Body>
          <Card.Title className="card-main-title">
            {link && (
              <Link {...link}>
                <LinesEllipsis text={title} maxLine="1" />
              </Link>
            )}
          </Card.Title>

          <Card.Text className="card-subtitle lh-sm mt-3">
            <LinesEllipsis text={subtitle} maxLine="3" />
          </Card.Text>
        </Card.Body>

        <Card.Header className="d-flex flex-row">
          <Image
            src={author.avatar}
            className="rounded-circle"
            height="50px"
            width="50px"
            alt="avatar"
            draggable="false"
          />

          <div className="ms-3">
            <Card.Title className="font-weight-bold mb-1">
              {author.name}
            </Card.Title>

            <OverlayTrigger
              placement="bottom"
              overlay={<Popover className="popover-date">{fulltime}</Popover>}
            >
              <Card.Text className="card-date">{timeago}</Card.Text>
            </OverlayTrigger>
          </div>
        </Card.Header>
      </div>
    </Card>
  );
};

export default CardItem;
