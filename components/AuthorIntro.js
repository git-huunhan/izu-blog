import { Row, Col, Image } from "react-bootstrap";

const AuthorIntro = () => {
  return (
    <Row>
      <Col md="8">
        <div className="mb-4 admin-intro d-flex">
          <Image
            roundedCircle
            width={64}
            height={64}
            src="https://avatars.githubusercontent.com/u/36226708?v=4"
            alt="Generic placeholder"
          />
          <p className="ms-4">
            <h5 className="font-weight-bold mb-0">Gót đemmmm,</h5>
            <blockquote className="welcome-text">
              Hế lô mấy con giời đã đến với blog của taooo.
              Chơi nàoooo!
            </blockquote>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default AuthorIntro;
