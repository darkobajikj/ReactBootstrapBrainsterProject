import React from "react";
import { Jumbotron, Container, Image } from "react-bootstrap";
import jumpho from "../images/jumpho.jpg";
import './Jumbotrone.css';


function Jumbotrone() {
  return (
    <Jumbotron className="jumbotro">
  <div className="connaslov">
  <h1 className="naslov text-center">
          Центар за Учење, Кариера и <br />
          Иновации
        </h1>
  </div>
</Jumbotron>
  );
}

export default Jumbotrone;
