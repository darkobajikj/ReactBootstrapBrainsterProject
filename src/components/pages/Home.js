import React, { Component } from "react";
import Jumbotrone from "../Jumbotrone";
import Cards from "../Cards";
import Edukacijasec from "../Edukacijasec";
import Nastanisec from "..//Nastanisec";
import Coworkingsec from "../Coworkingsec";
import Prostorzanastanisec from "../Prostorzanastanisec";
import Partnerisec from "../Partnerisec";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotrone />
        <Cards />
        <Edukacijasec />
        <Nastanisec />
        <Coworkingsec />
        <Prostorzanastanisec />
        <Partnerisec />
      </div>
    );
  }
}

export default Home;
