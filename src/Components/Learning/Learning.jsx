import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function Learning() {
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Learning;
