import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from '../House/House';
import axios from 'axios';


class Dashboard extends Component {

    constructor(){
        super();

        this.state={
            houses: [],
        }
    }

    componentDidMount = () => {
        axios.get('/api/houses').then(res => this.setState({
            houses: res.data
        }))
        .catch(err => console.log('The get is not working', err))
    }

    deleteHouse = () => {

    }


    render() {
        return (
            <div className='dashboard-page'>
                <div className='sidebar'>

                </div>
                <div className='middle-bar'>
                    <div className='dashboard-header'>
                        <div>Dashboard</div>
                        <Link to='/wizard'><button>Add New Property</button></Link>
                    </div>
                    <House />
                </div>
                <div className='sidebar'>

                </div>
            </div>
        )
    }
}


export default Dashboard;