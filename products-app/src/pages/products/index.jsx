import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cardAction } from "../../redux/action/products.action";
import { Helmet } from "react-helmet";

import "./index.scss";
import {
  deleteProductAction,
  sortByPriceAction,
} from "../../redux/action/addproducts.action";

const Products = () => {
  const productCard = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();
  const [objSort, setobjSort] = useState([]);

  useEffect(() => {
    dispatch(cardAction());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProductAction(id));
  };

  const handleSort = (obj) => {
    setobjSort(obj.sort((a, b) => +a.price - +b.price));
    dispatch(sortByPriceAction(objSort));
  };

  return (
    <div className="container">
      <Helmet>
        <title>Product Page</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div className="card-box">
        <Button onClick={() => handleSort(productCard.data)}>
          {" "}
          Sort By Price{" "}
        </Button>
        {productCard.loading ? (
          "loading..."
        ) : (
          <>
            {/* {productCard.data?.map((product) => {
              return (
                <Card style={{ width: "18rem" }}>
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{`price: ${product.price}`}</Card.Text>
                <Card.Text>{`description: ${product.description}`}</Card.Text>
                </Card.Body>
                </Card>
                {console.log(productCard)}
                );
              })} */}

            {productCard.data?.map((product) => {
              return (
                <Link to={"/pages/details-page/" + product.id}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src={product.img} />}
                  >
                    <Meta title={product.name} />
                    <Meta title="Productid" description={product.id} />
                    <Meta title="product price" description={product.price} />
                    <Meta
                      title="product description"
                      description={product.description}
                    />
                    <Button onClick={() => handleDelete(product.id)}>
                      {" "}
                      delete{" "}
                    </Button>
                  </Card>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
