import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import store from '../../ducks/store';
import axios from 'axios';
import {saveStep3} from '../../ducks/reducer';
import { connect } from 'react-redux';



class Step3 extends Component {

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

    addHouse = () => {
        let { name, address, city, state, zipcode, image, mortgage, rent } = this.state;

        axios.post('/api/houses', { name, address, city, state, zipcode, image, mortgage, rent }).then(res => this.setState({
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
        console.log(this.props)
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
                        <button className='previous-next'>Previous Step</button>
                    </div>
                    <div>
                        <button className='complete' onClick={() => this.addHouse()}>Complete</button>
                    </div>
                </div>
            </div>
        )
    }
}


function step3 (state) {
    return {
        reducer: state.reducer
    }
}

export default connect(step3, {saveStep3}) (Step3)