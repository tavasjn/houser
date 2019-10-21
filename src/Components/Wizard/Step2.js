import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../ducks/store';
// import axios from 'axios';



class Step2 extends Component {

    constructor() {
        super();

        const reduxState = store.getState();

        this.state = {
            houses: [],
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode,
            image: reduxState.image,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    handleInput = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        let { image } = this.state;
        return (
            <div className='wizard-page'>
                <div className='sidebar'></div>
                <div className='middle-bar'>
                    <div className='middle-content'>
                        <div className='input-boxes-wizard-2'>
                            Image URL
                        <input name='image' value={image} onChange={e => this.handleInput(e)} />
                        </div>
                        <div className='next-step-buttons'>
                            <div>
                                <Link to='/wizard/step1'><button className='previous-next'>Previous Step</button></Link>
                            </div>
                            <div>
                                <Link to='/wizard/step3'><button className='previous-next'>Next</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sidebar'></div>
            </div>
        )
    }
}


export default Step2;