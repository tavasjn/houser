import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Wizard extends Component {

    constructor() {
        super();

        this.state = {
            houses: [],
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    // componentDidMount() {
    //     this.getHouses()
    // }

    handleInput = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    addHouse = () => {
        let {name, address, city, state, zipcode} = this.state;

        axios.post('/api/house', { name, address, city, state, zipcode }).then(res => this.setState({
            houses: res.data,
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }))
        .catch(err => console.log('add broke', err));

        // console.log(this.addHouse)
    }


    render() {
        let {name, address, city, state, zipcode} = this.state;
        return (
            <div className='wizard-page'>
                <div className='sidebar'></div>
                <div className='middle-bar'>
                    <div className='middle-content'>
                        <div className='wizard-header'>
                            <div>Add New Listing</div>
                            <Link to='/'><button>Cancel</button></Link>
                        </div>
                        <div className='input-boxes-wizard-2'>
                            Property Name
                        <input name='name' value={name} onChange={e => this.handleInput(e)}/>
                        </div>
                        <div className='input-boxes-wizard'>
                            Address
                        <input name='address' value={address} onChange={e => this.handleInput(e)}/>
                        </div>
                        <div className='city-state-zip'>
                            <div className='column-inputs'>
                                City
                            <input name='city' value={city} onChange={e => this.handleInput(e)} />
                            </div>
                            <div className='column-inputs'>
                                State
                            <input name='state' value={state} onChange={e => this.handleInput(e)} />
                            </div>
                            <div className='column-inputs'>
                                Zip
                            <input name='zipcode' value={zipcode} onChange={e => this.handleInput(e)} />
                            </div>
                        </div>
                        <div className='complete-button'>
                            <button onClick={() => this.addHouse()}>Complete</button>
                        </div>
                    </div>
                </div>
                <div className='sidebar'></div>
            </div>
        )
    }
}


export default Wizard;