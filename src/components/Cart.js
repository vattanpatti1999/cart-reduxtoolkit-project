import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch(remove(item));
  };

  const cards = products.map((product) => (
    <div
      key={product.id}
      className="col-md-12"
      style={{ marginBottom: "10px" }}
    >
      <Card className="h-100">
        <div className="text-center">
          {product.images && product.images[0] && (
            <Card.Img
              variant="top"
              src={product.images[0]}
              style={{ width: "100px", height: "130px" }}
            />
          )}
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
}
