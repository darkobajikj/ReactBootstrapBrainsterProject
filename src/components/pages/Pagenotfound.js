import React, { Component } from "react";
import styled from 'styled-components';


class Pagenotfound extends Component {
  render() {
    return (
      <ComponentNotFound className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error">
              <h1>Ops!</h1>
              <h2>Error 404 Page Not Found!</h2>
            </div>
          </div>
        </div>
      </ComponentNotFound>
    );
  }
}

export default Pagenotfound;

const ComponentNotFound = styled.div`
  .error {
    padding: 40px 15px;
    text-align: center;
    margin-top:30px;
    margin-bottom:31px
  }
`;
