import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import store from '../../ducks/store';
import {saveStep1} from '../../ducks/reducer';
import { connect } from 'react-redux';

// import axios from 'axios';



class Step1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            houses: [],
            name: this.props.reducer.name,
            address: this.props.reducer.address,
            city: this.props.reducer.city,
            state: this.props.reducer.state,
            zipcode: this.props.reducer.zipcode,
            image: this.props.reducer.image,
            mortgage: this.props.reducer.mortgage,
            rent: this.props.reducer.rent
        }
    }

    handleInput = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }


    componentDidMount() {

    }

    render() {
        let { name, address, city, state, zipcode } = this.state;
        console.log(this.props)
        return (
            <div>

                <div className='input-boxes-wizard-2'>
                    Property Name
                        <input name='name' value={name} onChange={e => this.handleInput(e)} />
                </div>
                <div className='input-boxes-wizard'>
                    Address
                        <input name='address' value={address} onChange={e => this.handleInput(e)} />
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
                    <div>
                        <button className='previous-next'
                            onClick = {() => {
                                this.props.saveStep1(
                                    name,
                                    address,
                                    city,
                                    state,
                                    zipcode
                                )
                                this.props.history.push('/wizard/step2')
                            }}
                        >Next</button>
                    </div>
                </div>
            </div>
        )
    }
}


function step1 (state) {
    return {
        reducer: state.reducer
    }
}

export default connect(step1, {saveStep1}) (Step1)