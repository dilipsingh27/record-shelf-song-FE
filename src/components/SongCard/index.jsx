import React from "react";
import './SongCard.css'
import heartRed from '../../assets/heart-red.svg'
import heartGray from '../../assets/heart-gray.svg'
import genrePop from '../../assets/genre-pop.png'
import axios from "axios";


const SongCard = ({id,name,imageUrl,artist,genre,like,heart}) => {
    
    const fetchTask = async(id)=> {
        const response =  await fetch(`http://localhost:8080/api/records/${id}/likes`,
            {headers:{Authorization:'Bearer QWlzaHdhcnlhIE4='}})
        const data = await response.json()
        // console.log(data)
        return data;
    }
     
    const handleClick = async () => {
        const taskToToggle = await fetchTask(id)
        // console.log(taskToToggle)
        const update = {
                    // count:(like^1)?(like+1):(like-1),
                    like:(like^1)?true:false
            }
            
        console.log(JSON.stringify(update))
        const res =  await fetch(`http://localhost:8080/api/records/${id}/likes`,
                        {
                            method:'PATCH',
                            headers: {
                            "Content-type": 'application/json',
                            authorization:'Bearer QWlzaHdhcnlhIE4='
                            },
                            body: JSON.stringify(update)
                        })
        const updatedData = await res.json();
        console.log(updatedData)
       
        
    }  
    
    
    heart = heart?heartRed:heartGray
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
                        <img src={heart} alt="" onClick={async()=> await handleClick(id)} />
                        <p>{like}</p>
                    </div>
                </div>
                </div>
                
                
            </div>
    )
}

export default SongCard