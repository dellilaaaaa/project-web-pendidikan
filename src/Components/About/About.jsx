import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div className="aboutPage">
      <Container>
        <h2 className="aboutUS">ABOUT US</h2>
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <img
              src="https://www.beano.com/wp-content/uploads/legacy/38578_150_mathsad.jpg"
              alt="pict about us"
              className="picture"
            />
          </Col>
          <Col>
            <h4 className="question">Hai sobat SEVIMA, KENALAN YUK</h4>
            <br />
            <br />
            <h6>Apa sih sevima learning itu ???</h6>
            <p>
              Jadi sevima learning itu adalah platform yang dapat membantu
              teman-teman semua yang ingin memaksimalkan kemampuan dan
              pengetahuan teman - teman pada di dunia pendidikan, dengan sistem
              pembelajar video yang asyik sehingga membuat teman-teman semua
              tidak akan merasa bosan, jadi yuk bergabung dengan sevima learning
              sekarang, cerahkanlah masa depanmu bersama sevima.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
