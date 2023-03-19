import React, { useContext, useState } from 'react'
import noteContext from '../Context/noteContext'

export default function Login() {
    const [notes, registerUser,loginUser]= useContext(noteContext);
  
    const [state,setState] = useState({
        email:"",
        password:"",
    })
    const handleClick = (e)=>
    {   
        setState({...state,[e.target.name]:e.target.value})


    }
    return (
        <div className='col-md-4 container mt-5'>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input name='email' value={state.email} type="email" onChange={handleClick} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input name='password' value={state.password} onChange={handleClick} type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            
            <button onClick={()=> loginUser(state)} type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
}
