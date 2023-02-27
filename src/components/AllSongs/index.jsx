import React, { useEffect,useState } from 'react';
import './AllSongs.css'
import iconGenre from '../../assets/icon-genre.svg'
import {Link} from 'react-router-dom'
import SongCard from '../SongCard';
import axios, { all } from 'axios';


const AllSongs = () => {

    const[allSong,setAllSong] = useState([]);
    const [error,setError] = useState();
    const [countLike,setCountLike] = useState([]);
    const [heart,setHeart] = useState([]);
    
    const handleData = (d)=> {
        setAllSong(d)
    }
    
    useEffect( ()=> {
        const getData = async () => {
            const songsFromServer = await fetchData()
            // console.log(songsFromServer);
            // setAllSong(songsFromServer.data)
            setAllSong(songsFromServer)
            // handleData(songsFromServer.data)
            // console.log(allSong)
        }
        getData()
    },[])
    
    const fetchData = async() => {
        try {
            const response = await fetch('http://localhost:8080/api/records',
            {headers:{Authorization:'Bearer QWlzaHdhcnlhIE4='}})
            // const response = await axios.get('http://localhost:8080/api/records',
            // {headers:{Authorization:'Bearer QWlzaHdhcnlhIE4='}})
            // console.log(response.json())
            const {data} =  await response.json()
            // setAllSong(data)
            // console.log(typeof(data));
            // console.log(data)
            // console.log("hgfhghjgj")
    
            // console.log(allSong)
            return data;
            
        } catch (error) {
            setError(error.message)
        }
    }
    
    useEffect(()=> {
        allSong.map(async(song) => {
        
                const {data} = await axios.get(`http://localhost:8080/api/records/${song.id}/likes`,
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
        
    },[allSong])
    
    // console.log(countLike)
    // console.log(heart)
    
    // const fetchLike = async (songID) => {
    //     const res = await axios.get(`http://localhost:8080/api/records/${songID}/likes`,
    //     {headers:{Authorization:'Bearer QWlzaHdhcnlhIE4='}})
    //     return res.data
    // }


    // const likeData = allSong.map(song => {
    //     return (
    //         fetchLike(song.id)
    //     )
    // })
    // console.log(allSong)
    
    
    return (
       <section className='container'>
        <div className="container-title main-padding">
            <p>all Songs</p>
            <Link to="/genre">
            <img src={iconGenre} alt="efrrefe" />
            </Link>
        </div>
        
        
        <div className="all-cards">
            {
                allSong.map((song,index) => {
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
                })
            }
        </div>
       </section>
    )
}

export default AllSongs