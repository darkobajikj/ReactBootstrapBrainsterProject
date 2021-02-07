import React from 'react'
import { Button} from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import './Partnerisec.css';
import { useHistory } from "react-router-dom";

function Partnerisec() {

    const history = useHistory();

    return (
        <div className="partnsec" md={6} sm={12} xs={16}>
            <h2><b>ПАРТНЕРИ</b></h2>
            <br/>
            <h3>Имаш идеја? Отворени сме за соработка</h3>
            <Button className="parbut btn btn-warning" variant="dark text-warning" onClick={()=> history.push("Eventspace")}>
              <FaArrowRight/> ВИДИ ГО ПРОСТОРОТ
            </Button>
        </div>
    )
}

export default Partnerisec;
