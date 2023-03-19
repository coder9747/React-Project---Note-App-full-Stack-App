import React, { useState } from 'react'
import { useContext } from 'react'
import noteContext from '../Context/noteContext'

export default function Register() {
   
    const [notes,registerUser]= useContext(noteContext);
    

    const [info,setInfo] = useState({
        name:"",
        email:"",
        password:"",
        passwordConfirm:"",
    })
    const handleClick = (e)=>
    {
        setInfo({...info,[e.target.name]:e.target.value});
    }
   
    return (
        <div className='col-md-4 container mt-5'>
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Name</label>
                <input name='name' onChange={handleClick} type="email" value={info.name} class="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input name='email'  onChange={handleClick}  value={info.email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp"  class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input name='password'  onChange={handleClick}  value={info.password} type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword2" class="form-label">Password</label>
                <input name='passwordConfirm'  onChange={handleClick}  value={info.passwordConfirm} type="password" class="form-control" id="exampleInputPassword2"/>
            </div>
            
            <button onClick={()=> registerUser(info)} type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
}
