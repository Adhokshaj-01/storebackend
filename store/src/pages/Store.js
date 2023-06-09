import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";
import "../App.css"
// [{... }, {... }, {... }]
function Store() {
  return (
    <>
      <h1 align="center" className="p-3 typewriter">
        Welcome to the Eureka store!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
