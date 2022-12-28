import React, { useEffect, useState } from 'react'
import ContestForm from '../components/ContestForm';

import axios from 'axios';
import { useParams,useNavigate, Link } from "react-router-dom";

const Createcontest =() => {
    const [contests, setcontests] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/contest')
            .then(res =>{ 
                setcontests(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = contestid => {
        setcontests(contests.filter(contest => contest._id != contestid));
    }
    const createcontest = contest => {
        axios.post('http://localhost:8000/api/contest/new', contest)
            .then(res=>{
                setcontests([...contests, res.data]);
            })
    }
  return (
    <div>
                        <Link to="/"> Back</Link>

        <ContestForm onSubmitProp={createcontest} ></ContestForm>
    </div>
  )
}

export default Createcontest
