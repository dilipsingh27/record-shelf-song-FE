import React from 'react';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import AllSongs from './screens/AllSongs';
import Landing from './screens/Landing';
import Genre from './screens/Genre';
import PageNotFound from './screens/PageNotFound';
import ErrorPage from './screens/ErrorPage';


const App = () => {
    return (
        <div data-testid="app">
            
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/allSongs" element={<AllSongs/>}/>
                    <Route path="/genre" element={<Genre />}/>
                    <Route path='*' element={<PageNotFound />} />
                    <Route path="/error/:errorCode?" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
            
        </div>
    );
};

export default App;
