import { useEffect, useState } from "react";
import {
  Col,
  Row,
  Image,
  Card,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "lib/api";
import LinesEllipsis from "react-lines-ellipsis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const CardListItem = ({
  title,
  subtitle,
  timeago,
  fulltime,
  image,
  author,
  link,
  categories,
}) => {
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
    <Card className={`iz-card iz-card-list`}>
      <div className="card-body-wrapper">
        <Row>
          <Col xs="6" md="5">
            <div className="view overlay">
              {link && (
                <Link {...link}>
                  <Card.Img
                    src={urlFor(image).height(300).url()}
                    height={250}
                    draggable="false"
                    className="card-img clickable"
                    alt="Card image cap"
                  />
                </Link>
              )}
            </div>
          </Col>
          <Col xs="6" md="7" className="d-flex justify-content-end flex-column">
            <Card.Body>
              <Card.Title className="card-main-title">
                {link && (
                  <Link {...link}>
                    <LinesEllipsis text={title} maxLine="1" />
                  </Link>
                )}
              </Card.Title>
              <div
                className="category-item d-flex align-items-center"
                style={{ color: `${color}` }}
              >
                <div>
                  <FontAwesomeIcon fixedWidth size="xs" icon={faTag} />
                </div>
                <div className="ms-2">{categories}</div>
              </div>

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
                  overlay={
                    <Popover className="popover-date">{fulltime}</Popover>
                  }
                >
                  <Card.Text className="card-date">{timeago}</Card.Text>
                </OverlayTrigger>
              </div>
            </Card.Header>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default CardListItem;
