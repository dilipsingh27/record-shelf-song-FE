import React, { Fragment, useEffect, useState } from 'react';
import './Genre.css';
import iconGrid from '../../assets/icon-grid.svg';
import genrePop from '../../assets/genre-pop.png';
import {Link, useNavigate} from 'react-router-dom';
import SongCard from '../../components/SongCard';
import makeRequest from '../../utils/makeRequest';
import { GET_SONGS } from '../../constants/apiEndpoints';
// import GenreSort from '../GenreSort';

const Genre = () => {
    const [genres,setGenres] = useState({});
    const navigate = useNavigate();
    
    // const pop = song.filter(each => each.genre.name==='Pop')
    // const bollywood = song.filter(each => each.genre.name==='Bollywood')
    // const country = song.filter(each => each.genre.name==='Country')
    // const rock = song.filter(each => each.genre.name==='Rock')

    
    // console.log(pop)
    useEffect(()=> {
        makeRequest(GET_SONGS,{},navigate)
            .then((response)=> {
            // console.log(response.data)
                const songs = response.data;
            
                const genreSongs = songs.reduce((acc,currSong)=> {
                    const category = currSong.genre.name;
                    if(!acc[category]) {
                        acc[category] = [];    //for storing song category wise
                    }
                    acc[category].push(currSong);
                    return acc;
                }, {});

                setGenres(genreSongs);
            })
            .catch(()=> {
            
            });
    },[]);
    
    console.log(genres);
    
    return genres ? (
        <div className='container' data-testid = 'genre'>
        
            <div className="container-title main-padding">
                <p>genres</p>
                <Link to="/allSongs" data-testid = 'songs'>
                    <img src={iconGrid} alt="efrrefe" />
                </Link>
            </div>
           
            {
                Object.keys(genres).map(eachGenre => (
                    <>   
                        <div className='genre-detail main-padding'>
                            <img src={genrePop} alt="efe"/>
                            <button>{eachGenre}</button>
                        </div>
               
                
                        <div className="all-cards">
                            {genres[eachGenre].map(eachSong => (
                                // console.log(eachSong)
                                <SongCard key={eachSong.id} 
                                    id={eachSong.id}
                                    name={eachSong.name}
                                    imageUrl={eachSong.imageUrl}
                                    artist={eachSong.artist}
                                    genre={eachSong.genre}
                                    
                                />
                    
                            ))}
                        </div>
                
                
                    </> 
                ))}
            
        </div>
    ) : (
        <p>loading...</p>
    );
};

export default Genre;