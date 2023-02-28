import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="container--page" data-testid='notfound'>
            <div className="container--content">
                <img
                    src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    alt=""
                />
                <div className="container--description">
                    <h1>404</h1>
                    <h5>Look like you are lost return to home </h5>

                    <button className="link_404">
                        <Link to="/">Go to Home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;