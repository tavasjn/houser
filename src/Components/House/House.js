import React, { Component } from 'react';
// import axios from 'axios';
import Delete from '../../delete_button.png';

class House extends Component {
    render() {
        let { houses, deleteHouse } = this.props;
        console.log(houses)
        return (
            <div className='housing-display'>
                <div>
                    <div>Property Name: {houses.name}</div>
                    <div>Address: {houses.address}</div>
                    <div>City: {houses.city}</div>
                    <div>State: {houses.state}</div>
                    <div>Zip: {houses.zipcode}</div>
                </div>
                <div><button onClick={() => deleteHouse(houses.id)}><img src={Delete} /></button></div>
            </div>
        )
    }
}

export default House;
