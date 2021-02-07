import React, { Component } from "react";
import { Button, Image, Container, Col, Row, Card } from "react-bootstrap";
import gotvaci from "../images/gotvaci.jpg";
import gosti from "../images/gosti.jpg";
import baklava from "../images/baklava.jpg";
import kolaci from "../images/kolaci.jpg";
import "./Spacekitchen.css";

class Spacekitchen extends Component {
  render() {
    return (
      <Container fluid className="mt-20px">
            <Row>
              <Col className="spaceco col-md-8 col-lg-7">
              <Image
              className="card1 rounded float-right mr-10px"
              style={{ width: 370, height:400 }}
              src={gotvaci}
            />
              <Image
              className="card2 rounded float-right mr-10px"
              style={{ width: 380, height: 200 }}
              src={gosti}
            />
            <br/>
            <Image
              className="card3 rounded float-right mr-10px"
              style={{width: 190, height: 200 }}
              src={kolaci}
            />
            <Image
              className="card4 rounded float-right mr-10px"
              style={{ width: 190, height: 200 }}
              src={baklava}
            />
            </Col>
              <Col className="spacecol col-md-8 col-lg-4">
                <br />
                <br />
                <h2 className="spaceh">Space Kitchen</h2>
                <p className="spacetex">
                  Место каде сите настани започнуваат и завршуваат.
                  <br /> Место каде нашиот тим готви и експериментира.
                  <br /> Нашата кујна има само едно правило.
                  <br />
                  <br />
                  Храната мора да биде вегетаријанска. Пијалок, кафе
                  <br /> или мезе. Вие одберете вид на кетеринг и ние ќе го
                  <br /> обезбедиме.
                </p>
                </Col>
            </Row>
          </Container>
    );
  }
}

export default Spacekitchen;
