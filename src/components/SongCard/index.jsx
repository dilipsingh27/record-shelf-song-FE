import React,{useState} from 'react';
import './SongCard.css';
import heartRed from '../../assets/heart-red.svg';
import heartGray from '../../assets/heart-gray.svg';
import { useEffect } from 'react';
import makeRequest from '../../utils/makeRequest';
import { GET_SONG_LIKE_BY_ID, UPDATE_SONG_LIKE_BY_ID } from '../../constants/apiEndpoints';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


const SongCard = ({id,name,imageUrl}) => {
    const[like,setLike] = useState();
    const[likeCount,setLikeCount] = useState();
    const navigate = useNavigate();
    
    useEffect(()=> {
        makeRequest(GET_SONG_LIKE_BY_ID(id),{},navigate)
            .then((response)=> {
            // console.log(response.data)
                setLike(response.data.like);
                setLikeCount(response.data.count);
            })
            .catch(()=> {
            
            });
    },[]);

    const handleLike= () => {
        makeRequest(UPDATE_SONG_LIKE_BY_ID(id),{data:{like:!like}})
            .then ((response)=> {
                setLike(response.data.like);
                setLikeCount(response.data.count);
            })
            .catch(()=> {
            
            });
        
    };
    
    
    
    const heart = like?heartRed:heartGray;
    return (
        
        <div className="song-card">
            <div className="card">
                <div className="image-holder">
                    <img src={imageUrl} alt="hellloo songgg" />
                </div>
                
                <div className="song-details">
                    <div className="song-description">
                        <div className="song-name">
                            <p>{name}</p>
                        </div>
                        <div className="song-artist">
                            <p>Linkin Park</p>
                        </div>
                    </div>
                    <div className="song-react">
                        <img src={heart} alt="" onClick={handleLike}/>
                        <p onClick={handleLike}>{likeCount}</p>
                    </div>
                </div>
            </div>
                
                
        </div>
    );
};

SongCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    artist: PropTypes.string,
    genre: PropTypes.string
};

export default SongCard;