import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from '../House/House';
import axios from 'axios';
// import store from '../../ducks/store';


class Dashboard extends Component {

    constructor() {
        super();

        this.state = {
            houses: [],
        }
    }

    componentDidMount = () => {
        axios.get('/api/houses').then(res => this.setState({
            houses: res.data
        }))
            .catch(err => console.log('The get is not working', err))
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then(res => {
            this.setState({
                houses: res.data
            })
        })
    }


    render() {
        console.log(this.state)
        let {houses} = this.state;
        return (
            <div className='dashboard-page'>
                <div className='sidebar'>

                </div>
                <div className='middle-bar'>
                    <div className='dashboard-header'>
                        <div>Dashboard</div>
                        <Link to='/wizard/step1'><button>Add New Property</button></Link>
                    </div>
                    {houses.map((houses, index) => (
                        <House deleteHouse={this.deleteHouse}
                            houses={houses} index={index}/>
                    ))}
                </div>
                <div className='sidebar'>

                </div>
            </div>
        )
    }
}


export default Dashboard;