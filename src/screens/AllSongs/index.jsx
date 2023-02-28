import React, { useEffect, useState } from 'react';
import './AllSongs.css';
import iconGenre from '../../assets/icon-genre.svg';
import { Link, useNavigate } from 'react-router-dom';
import SongCard from '../../components/SongCard';
import makeRequest from '../../utils/makeRequest';
import { GET_SONGS } from '../../constants/apiEndpoints';



const AllSongs = () => {

    const [allSong, setAllSong] = useState([]);
    // const [error,setError] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        makeRequest(GET_SONGS, {}, navigate)
            .then((response) => {
                setAllSong(response.data);
            })
            .catch(() => {

            });
    }, []);





    return (
        <section className='container' data-testid = 'songs'>
            <div className="container-title main-padding">
                <p>all Songs</p>
                <Link to="/genre" data-testid = 'genre'>
                    <img src={iconGenre} alt="efrrefe" />
                </Link>
            </div>


            <div className="all-cards" >
                {
                    // allSong.map((song,index) => {
                    allSong.map((song) => {
                        return (<SongCard data-testid = 'Card'
                            key={song.id}
                            id={song.id}
                            name={song.name}
                            imageUrl={song.imageUrl}
                            artist={song.artist}
                            genre={song.genre}
                            
                        />
                        );
                    })
                }
            </div>
        </section>
    );
};

export default AllSongs;