import React from 'react';
import './Landing.css';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing">
            <div className="landing-page">
                <p>:((</p>
                <p>seems a bit empty in here</p>
                <Link to="/allSongs">
                    <button>sync</button>
                </Link>
            
            </div>
            
        </section>
    );
};

export default Landing;