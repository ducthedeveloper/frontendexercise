import React,{useState} from 'react';
import login from './Server/login.js';
import { useHistory } from "react-router-dom"

function Login(){
    const history = useHistory();
    const [inp,setInp] = useState({
        username: "",
        password: "",
    })
    
    function inpt({target}){
        setInp(state => ({...state, [target.name]: target.value}))
    }
    
    function getIn(e){
        e.preventDefault()
        const {data , status} = login(inp.password, inp.username);
        if (status === 200) {
            localStorage.setItem("secret", data)
            history.push("/myarticles")
        } else {
            alert("Nope")
        }
    }
    
    return(
        <div className='logIn'>
        <div>
            
            </div>    
           <form className='input'>
            <ul>
            <h1>
            Log In
            </h1>
             <label>Username</label>   
           <li> <input type='text' name="username" onChange={inpt} placeholder='me@example.com' required></input></li>
           <label>Password</label>
            <li><input type='text' name="password" onChange={inpt} placeholder='*********' required></input></li>
            </ul>
            <button className='logBtn'onClick={getIn}>Log In</button>
            </form>
        </div>
    )
}

export default Login;
