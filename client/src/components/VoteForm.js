import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default (props) => {
    let navigate = useNavigate();
    const { initialcountry1,initialcountry2,initialcountry3,v1,v2,v3, onSubmitProp,question } = props;
    
    const [country1, setcountry1] = useState(initialcountry1); 
    const [country2, setcountry2] = useState(initialcountry2); 
    const [country3, setcountry3] = useState(initialcountry3); 
    const [vote1, setvote1] = useState(0); 
    const [vote2, setvote2] = useState(0); 
    const [vote3, setcountry3v] = useState(0); 
    let c =v1;
    let c1 =v2;




    //handler when the form is submitted
    const onVote1Handler = e => {
        setvote1(v1+1)

        //prevent default behavior of the submit
        e.preventDefault();

        console.log("added")

        setvote1(v1+1)
        c++;
            console.log(vote1)
            onSubmitProp({"question":question,"country1":initialcountry1,"vote1":c++,"country2":initialcountry2,"vote2":v2,"country3":initialcountry3,"vote3":v3});
            console.log("done")


    }
    const onVote2Handler = e => {

        //prevent default behavior of the submit
        e.preventDefault();
        console.log(vote2)
        c1++;
        console.log(c1)
        onSubmitProp({"question":question,"country1":initialcountry1,"vote1":v1,"country2":initialcountry2,"vote2":c1++,"country3":initialcountry3,"vote3":v3});
        console.log("sssssssssss")


    }
    //onChange to update firstName and lastName
    return (
        <div  style={{display:'flex' ,flexDirection:'row' ,justifyContent:'space-around'}}>
          
           <div>
                <label style={{fontSize:'26px'}}>{country1}</label><br/>
                <input type="submit" onClick={onVote1Handler} value='vote' style={{backgroundColor:'red'}} />
            </div>
            <div>
                <label style={{fontSize:'26px'}}>{country2}</label><br/>
                <input type="submit" onClick={onVote2Handler}  value='vote' style={{backgroundColor:'green'}} />
            </div>


        </div>
    )
}
