import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";

import "./Learning.css";
import { Link } from "react-router-dom";

function Learning() {
  const [listLearning, setListLearning] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/learning").then((result) => {
      setListLearning(result.data);
    });
  }, []);
  return (
    <div className="list">
      <h2 className="awal">learning with sevima</h2>
      <Row xs={1} md={4} className="g-4">
        {listLearning.map((item) => (
          <Col>
            <Card
              className="cardLearn"
              style={{ border: "2px solid rgb(42, 85, 86)" }}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="judulCard">{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Link to={{ pathname: `${item.link}` }} target="_blank">
                <button className="tonton">tonton video</button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Learning;
