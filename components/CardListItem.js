import { Col, Row, Image, Card } from "react-bootstrap";

const CardListItem = () => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Row>
          <Col md="5">
            <div className="view overlay">
              <Card.Img
                src="https://cms-assets.tutsplus.com/uploads/users/16/courses/523/preview_image/nodejs-from-scratch-400x277.jpg"
                alt="Card image cap"
              />
            </div>
          </Col>
          <Col md="7" className="d-flex justify-content-end flex-column">
            <Card.Body>
              <Card.Title className="card-main-title">
                Placeholder Title
              </Card.Title>
              <Card.Text>Placehodler Subtitle</Card.Text>
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
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default CardListItem;
