import React from "react";
import Header from '../../components/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AllSongs from "../../components/AllSongs";
import Landing from "../../components/Landing";
import Genre from "../../components/Genre";


const Home = () => {
    return (
        <div>
            
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/allSongs" element={<AllSongs/>}/>
                <Route path="/genre" element={<Genre />}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default Home