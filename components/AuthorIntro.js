import { Row, Col, Figure } from "react-bootstrap";

const AuthorIntro = () => {
  return (
    <Row>
      <Col md="8">
        <Figure className="mb-4 admin-intro">
          <Figure.Image
            roundedCircle
            width={64}
            height={64}
            src="https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4"
            alt="Generic placeholder"
          />
          <Figure.Caption>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
              My name is Filip Jerga and I am an experienced software engineer
              and freelance developer. and this is my blog page.
            </p>
          </Figure.Caption>
        </Figure>
      </Col>
    </Row>
  );
};

export default AuthorIntro;
