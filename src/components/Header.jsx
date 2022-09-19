import React from 'react';
import logo from '../media/logo1.png';

const Header = () => {
    return (
        <header data-testid="header">
            <img
                src={logo}
                alt=''
                height={300}
                className='logo'
            />
        </header>
    );
}
 
export default Header;