import React, { Component } from 'react';

import Logo from '../../houser_logo.png';


class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='navbar'>
                    <div className='logo'><img src={Logo}/></div>
                    <div className='title'>Houser</div>
                </div>
            </div>
        )
    }
}


export default Header;