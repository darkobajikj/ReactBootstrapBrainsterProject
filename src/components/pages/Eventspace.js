import React, { Component } from 'react'
import Prnastani from '../Prnastani';
import Nscards from '../Nscards';
import Spacekitchen from '../Spacekitchen';
import Nudimebut from '../Nudimebut';
import Eventhostsec from '../Eventhostsec';

class Eventspace extends Component {
    render() {
        return (
            <div>
                <Prnastani />
                <Nscards />
                <Spacekitchen />
                <Nudimebut />
                <Eventhostsec />
            </div>
        )
    }
}

export default Eventspace;
