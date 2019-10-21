import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import store from '../../ducks/store';
import wizardRoutes from './wizardRoutes';



class Wizard extends Component {

    render() {
        return (
            <div className='wizard-page'>
                <div className='sidebar'></div>
                <div className='middle-bar'>
                    <div className='middle-content'>
                        <div className='wizard-header'>
                            <div className='title-wizard'>Add New Listing</div>
                            <Link to='/'><button className='cancel-button'>Cancel</button></Link>
                        </div>
                        {wizardRoutes}
                    </div>
                </div>
                <div className='sidebar'></div>
            </div>
        )
    }
}


export default Wizard;
