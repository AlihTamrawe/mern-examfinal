import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default (props) => {
    let navigate = useNavigate();
    const {  onSubmitProp } = props;
    //keep track of what is being typed via useState hook
    
    const [question, setQuestion] = useState(""); 
    const [country1, setcountry1] = useState("");
    const [vote1, setvote1] = useState(1);
    const [country2, setcountry2] = useState("");
    const [vote2, setvote2] = useState(1);
    const [country3, setcountry3] = useState("");
    const [vote3, setvote3] = useState(1);


    //handler when the form is submitted
    const onSubmitHandler = e => {
        
        e.preventDefault();
  
        onSubmitProp({question,country1,vote1,country2,vote2,country3,vote3});

            return navigate("/");

    }
    //onChange to update firstName and lastName
    return (
        <div>
            <p>Create New Contest</p>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Contest Question</label><br/>
                <input type="text" onChange={(e)=>setQuestion(e.target.value)} />
            </p>
            <p>
                <label>Country1</label><br/>
                <input type="text" onChange={(e)=>setcountry1(e.target.value)}/>
            </p>
            <p>
                <label>Country2</label><br/>
                <input type="text" onChange={(e)=>setcountry2(e.target.value)} />
            </p>
            <p>
                <label>Country3</label><br/>
                <input type="text" onChange={(e)=>setcountry3(e.target.value)} />
            </p>
            <input type="submit"/>
        </form>

        </div>
    )
}
