import React from "react";
import { Button, Image, Container, Col, Row, Popover, OverlayTrigger } from "react-bootstrap";
import coworking from "../images/coworking.jpg";
import "./Coworkingsec.css";

function Coworkingsec() {
  return (
      <Container fluid="sm" className="cowork mt-20px">
        <Row>
          <Col className="mr-10px" md={6} sm={12} xs={16}>
            <Image fluid
              className="coworimg rounded"
              style={{ width: 600 }}
              src={coworking}
            />
          </Col>
          <Col md={6} sm={12} xs={16}className="cowsec pt-20">
            <Button type="button" className="sold btn-warning">
              SOLD OUT
            </Button>
            <br />
            <br />
            <h2 className="wo">Coworking</h2>
            <p className="cotex">
              Биди дел од tech заедницата на иноватори, кретивци и претприемачи.
              Резервирај стол во нашата shared office. Пичирај го твојот бизнис
              и нашиот тим заедно ќе одлучи секој месец со кого да ги дели
              своите канцеларии.
            </p>
            <>
  {['bottom'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          
          <Popover.Content className="border border-danger">
            <strong>Местата се распродадени</strong>
          </Popover.Content>
        </Popover>
      }
    >
         <Button className="coak" variant="text-warning">
              РЕЗЕРВИРАЈ МЕСТО
            </Button>
    </OverlayTrigger>
  ))}
</>          
          </Col>
        </Row>
      </Container>
  );
}

export default Coworkingsec;
