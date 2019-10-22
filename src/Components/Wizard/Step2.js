import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import store from '../../ducks/store';
// import axios from 'axios';
import {saveStep2} from '../../ducks/reducer';
import { connect } from 'react-redux';



class Step2 extends Component {

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

    render() {
        let { image } = this.state;
        console.log(this.props)
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
                                <button className='previous-next'
                                    onClick= {() => {
                                        this.props.saveStep2(
                                            image
                                        )
                                        this.props.history.push('/wizard/step3')
                                    }}
                                >Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sidebar'></div>
            </div>
        )
    }
}

function step2 (state) {
    return {
        reducer: state.reducer
    }
}

export default connect(step2, {saveStep2}) (Step2)