import Picture from "../components/Picture";
import data from "../helper/data";
import { Col, Container, Row } from "react-bootstrap";

const Homepage = () => {
    // console.log(data)
  return (
    <Container>
      <h1 className="text-center mt-4 text-success">Albums</h1>
      <Row className="gap-5">
        
      </Row>
      <Picture />
    </Container>
  );
};

export default Homepage;
