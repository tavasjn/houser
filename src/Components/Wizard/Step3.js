import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../ducks/store';
import axios from 'axios';



class Step3 extends Component {

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

    addHouse = () => {
        let { name, address, city, state, zipcode, image, mortgage, rent } = this.state;

        axios.post('/api/house', { name, address, city, state, zipcode, image, mortgage, rent }).then(res => this.setState({
            houses: res.data,
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            image: '',
            mortgage: 0,
            rent: 0
        }))
            .catch(err => console.log('add broke', err));

        // console.log(this.addHouse)
    }

    componentDidMount() {

    }

    render() {
        let { mortgage, rent } = this.state;
        return (
            <div>
                <div className='input-boxes-wizard-step3'>
                    <div className='input-boxes-wizard-2'>
                        Monthly Mortgage Amount
                        <input name='mortgage' value={mortgage} onChange={e => this.handleInput(e)} />
                    </div>
                    <div className='input-boxes-wizard-2'>
                        Desired Monthly Rent
                        <input name='rent' value={rent} onChange={e => this.handleInput(e)} />
                    </div>
                </div>
                <div className='next-step-buttons'>
                    <div>
                        <Link to='/wizard/step2'><button className='previous-next'>Previous Step</button></Link>
                    </div>
                    <div>
                        <button className='complete' onClick={() => this.addHouse()}>Complete</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Step3;