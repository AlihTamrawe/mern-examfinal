import React, { useEffect, useState } from 'react'
    import axios from 'axios'
import ContestList from '../components/ContestList';
import { Link } from 'react-router-dom';


const Main = (props) => {
    const [contests, setContests] = useState([]);
    const [contests2, setContests2] = useState([]);

    const [loaded, setLoaded] = useState(false);
    const  [x,setx] = useState(5);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/contest')
            .then(res=>{
                setContests(res.data);
                setContests2(contests.reverse().filter(z => z.vote1+z.vote2>x));

                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[contests]);
    
   
  
    // const removeFromDom = personId => {
    //     setcontests(contests.filter(pr => pr._id != prId));
    // }


    return (
        <div>
                <Link to="/contest/new"> Creat new Contest</Link>
           <hr/>
           {loaded &&
           <div style={{display:'flex',justifyContent:'space-around'}}>
           <ContestList contest={contests} text={"All Content "} />
                <label> set Range of Votes</label>
                <input style={{width:'60px' ,height:'10px'}} type="number"  onChange={e=>setx(e.target.value)}/>
           <ContestList contest={contests2} text={"Best Vote Contest "} />
           </div>}

        </div>
    )
}
    
export default Main;

