import React from "react";
import { Button, Image, Container, Col, Row } from "react-bootstrap";
import prostorzanastani from "../images/prostorzanastani.jpg";
import "./Prostorzanastanisec.css";
import { FaArrowRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function Prostorzanastani() {

  const history = useHistory();
  

  return (
    <div className="proworse">
      <Container fluid="sm">
        <Row>
          <Col className="prosec mr-10px" md={6} sm={12} xs={16}>
            <h2 className="pro">Простор за настани</h2>
            <p className="protex">
              Можност за презентации, обуки, конференции, networking настани.
              Одбери ја просторијата која најмногу ќе одговара на твојата идеја.
              Го задржуваме правото да одбереме кој настан ќе се организира во
              нашиот Brainster Space.
            </p>
            <Button className="aka" variant="text-warning" onClick={()=> history.push("Eventspace")}>
              <FaArrowRight/> ВИДИ ГО ПРОСТОРОТ
            </Button>
          </Col>
          <Col className="align-middle mr-10px" md={6} sm={12} xs={16}>
            <Image fluid
              className="rounded"
              style={{ width: 600 }}
              src={prostorzanastani}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Prostorzanastani;
