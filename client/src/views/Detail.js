import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [contest, setcontest] = useState({})
    const { id } = useParams();
   
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/contest/' +id)
            .then(res => setcontest(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>

        <h3> {contest.question}</h3>
                <Link to="/"> Back</Link>

        <div  style={{display:'flex' ,flexDirection:'row' ,justifyContent:'space-around'}}>

            <div>
            <p> {contest.country1}</p>
            <p> {contest.vote1}</p>

            </div>
            <div>
            <p> {contest.country2}</p>
            <p> {contest.vote2}</p>

            </div>
        </div>
        </div>
    )
}
    
export default Detail;

