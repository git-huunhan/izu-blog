import { Image, Card } from "react-bootstrap";

const CardItem = ({ title, subtitle }) => {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <div className="view overlay">
          <Card.Img
            src="https://cms-assets.tutsplus.com/uploads/users/16/courses/523/preview_image/nodejs-from-scratch-400x277.jpg"
            alt="Card image cap"
          />
        </div>

        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>

        <Card.Header className="d-flex flex-row">
          <Image
            src={"https://via.placeholder.com/150"}
            className="rounded-circle"
            height="50px"
            width="50px"
            alt="avatar"
          />
          
          <div className="ms-3">
            <Card.Title className="font-weight-bold mb-1">
              Placeholder Author
            </Card.Title>
            <Card.Text className="card-date">Placeholder Date</Card.Text>
          </div>
        </Card.Header>
      </div>
    </Card>
  );
};

export default CardItem;
