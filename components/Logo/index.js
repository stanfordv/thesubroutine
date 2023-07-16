import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

function Logo() {
  const logo_url = "/large_sublogolong.gif";

  return (
    <Row>
      <img top={true} style={{ width: "100%" }} src={logo_url} />
    </Row>
  );
}

export default Logo;
