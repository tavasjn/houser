import React, { Component } from 'react';
// import axios from 'axios';
import Delete from '../../delete_button.png';

class House extends Component {
    render() {
        let { houses, deleteHouse } = this.props;
        console.log(houses)
        return (
            <div className='housing-display'>
                <div className='house-image'>
                    <img src={houses.image} alt='' className='image'/>
                </div>
                <div>
                    <div>Property Name: {houses.name}</div>
                    <div>Address: {houses.address}</div>
                    <div>City: {houses.city}</div>
                    <div>State: {houses.state}</div>
                    <div>Zip: {houses.zipcode}</div>
                </div>
                <div>
                    <div>Monthly Mortgage: {houses.mortgage}</div>
                    <div>Desired Rent: {houses.rent}</div>
                </div>
                <div><button onClick={() => deleteHouse(houses.id)}><img src={Delete} alt=''/></button></div>
            </div>
        )
    }
}

export default House;
