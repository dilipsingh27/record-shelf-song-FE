import React, { useEffect, useState } from 'react';
import './Genre.css'
import iconGrid from '../../assets/icon-grid.svg'
import genrePop from '../../assets/genre-pop.png'
import {Link} from 'react-router-dom'
import SongCard from '../SongCard';
import axios from 'axios';
// import GenreSort from '../GenreSort';

const Genre = () => {
    const [song,setSong] = useState([])
    const [countLike,setCountLike] = useState([]);
    const [heart,setHeart] = useState([])

    
    useEffect(()=>{
        const fetchSong = async ()=> { 
            const response = await axios.get('http://localhost:8080/api/records',
            {headers:{Authorization:'Bearer QWlzaHdhcnlhIE4='}})
            // console.log(response.data.data)
            setSong(response.data.data)
        }
        fetchSong()
    },[])

    useEffect(()=> {
        song.map(async(eachSong) => {
        
                const {data} = await axios.get(`http://localhost:8080/api/records/${eachSong.id}/likes`,
                {headers:{Authorization:'Bearer QWlzaHdhcnlhIE4='}})
                // console.log(data.data)
                const {count,like} = data.data;
                // console.log(count)
                // setCountLike([...this.countLike,count])
                
                
                // setCountLike(countLike.push(count))


                // const a = []
                // a.push(count)
                // setCountLike(a)
                // setCountLike(countLike.concat(count))
                
                // setCountLike(countLike => countLike.concat(count))
                setCountLike(countLike => [...countLike,count])
                setHeart(heart => [...heart,like])
                // console.log(countLike)
                
        })
        
    },[song])
    

    const pop = song.filter(each => {
        return(
            each.genre.name==='Pop'?each:null
        )
    })

    const country = song.filter(each => {
        return(
            each.genre.name==='Country'?each:null
        )
    })

    const rock = song.filter(each => {
        return(
            each.genre.name==='Rock'?each:null
        )
    })

    const bollywood = song.filter(each => {
        return(
            each.genre.name==='Bollywood'?each:null
        )
    })

    
    // console.log(pop)
    
    
    return (
       <section className='container'>
        <div className="container-title main-padding">
            <p>genres</p>
            <Link to="/allSongs">
            <img src={iconGrid} alt="efrrefe" />
            </Link>
        </div>
        {/* <GenreSort genreInfo={pop}/> */}
        <div className='genre-detail main-padding'>
                <img src={genrePop}/>
                <button>pop</button>
        </div>
        
        <div className="all-cards">
            {pop.map((song,index) => {
                return ( <SongCard key={song.id} 
                                    id={song.id}
                                    name={song.name}
                                    imageUrl={song.imageUrl}
                                    artist={song.artist}
                                    genre={song.genre}
                                    like={countLike[index]}
                                    heart={heart[index]}
                                   
                        />
                    )
            })}
        </div>
        
        
        <div className='genre-detail main-padding'>
                <img src={genrePop}/>
                <button>rock</button>
        </div>
        <div className="all-cards">
            {rock.map((song,index) => {
                return ( <SongCard key={song.id} 
                                    id={song.id}
                                    name={song.name}
                                    imageUrl={song.imageUrl}
                                    artist={song.artist}
                                    genre={song.genre}
                                    like={countLike[index]}
                                    heart={heart[index]}
                        />
                    )
            })}
        </div>
        
        
        <div className='genre-detail main-padding'>
                <img src={genrePop}/>
                <button>country</button>
        </div>
        <div className="all-cards">
            {country.map((song,index) => {
                return ( <SongCard key={song.id} 
                                    id={song.id}
                                    name={song.name}
                                    imageUrl={song.imageUrl}
                                    artist={song.artist}
                                    genre={song.genre}
                                    like={countLike[index]}
                                    heart={heart[index]}
            
                        />
                    )
            })}
        </div>

        <div className='genre-detail main-padding'>
                <img src={genrePop}/>
                <button>bollywood</button>
        </div>
        <div className="all-cards">
            {bollywood.map((song,index) => {
                return ( <SongCard key={song.id} 
                                    id={song.id}
                                    name={song.name}
                                    imageUrl={song.imageUrl}
                                    artist={song.artist}
                                    genre={song.genre}
                                    like={countLike[index]}
                                    heart={heart[index]}
                                   
                        />
                    )
            })}
        </div>
       </section>
    )
}

export default Genre