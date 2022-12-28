import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ContestList = (props) => {
    const navigate = useNavigate()
    const [contests, setcontests] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/contest')
            .then(res => setcontests(res.data));
    }, [])
    const removeFromDom = contestid => {
    setcontests(contests.filter(contest => contest._id != contestid))
    }
    return (<div>
        <div style={{width:'600px',height:'250px' } }>
            <h2>{props.text}</h2>
            <div>
            {props.contest.map((contest, idx) => {
                return <p key={idx}>
                    <Link to={"/choose/" + contest._id}>
                        {contest.question}
                    </Link>
                    |
                    <div style={{display:'flex' ,flexDirection:'column',alignContent: 'space-between'}}>
                    <div style={{display:'flex' ,justifyContent: 'space-between'}}><p>C1 : {contest.country1}</p> <p>C2 :{contest.country2}</p></div>
                    <div style={{display:'flex' ,justifyContent: 'space-between'}}><p>  Votes: {contest.vote1}</p>  ---- <p>   Votes:{contest.vote2}</p></div>
                    </div>
                    <div ><p> {contest.createdAt}</p>  </div>


                </p>
            })}
            </div>
        </div>
        </div>
    )
}
    
export default ContestList;



