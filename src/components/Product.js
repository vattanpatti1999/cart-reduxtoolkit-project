import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

export default function Product() {
  const dispatch = useDispatch();
  const { data: products = [], status } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "Loading") {
    return <p>Loading products...</p>;
  }

  if (status === "failed") {
    return <p>Something went wrong! Try again later</p>;
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards =
    Array.isArray(products) &&
    products.map((product) => (
      <div
        key={product.id}
        className="col-md-3"
        style={{ marginBottom: "10px" }}
      >
        <Card className="h-100">
          <div className="text-center">
            {
              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  width: "100px",
                  height: "130px",
                  paddingTop: "5px",
                  borderRadius: "10px",
                }}
              />
            }
          </div>

          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    ));

  return (
    <>
      <h1>Products</h1>
      <div className="row">{cards}</div>
    </>
  );
}
