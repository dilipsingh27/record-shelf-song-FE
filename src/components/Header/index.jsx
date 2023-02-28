import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="heading-title">
                <Link to="/">
                    <p>My <em>Record</em> Shelf</p>
                </Link>
            </div>
        </div>
    );
};
export default Header;
