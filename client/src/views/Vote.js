import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import VoteForm from '../components/VoteForm';

    
const Update = (props) => {
    let navigate = useNavigate();

    const { id } = useParams();
    const [contest, setcontest] = useState({});
    
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/contest/' + id)
            .then(res => {
                setcontest(res.data);
                setLoaded(true)
                console.log(contest.country1)

            })
    }, [])
    const updatecontest = contest => {
        axios.put('http://localhost:8000/api/contest/' + id, contest)
        
            .then(res => {console.log(res.data); setcontest(contest)});

            return navigate("/contest/"+id);

    }
    
    
    return (
        <div>
            <div>
            <h1>  Votes </h1>
                    {loaded && <VoteForm onSubmitProp={updatecontest} question={contest.question} initialcountry1={contest.country1} initialcountry2={contest.country2}  initialcountry3={contest.country3} v1={contest.vote1} v2={contest.vote2} v3={contest.vote3} ></VoteForm>}
                    </div>
        </div>
    )
}
    
export default Update;

