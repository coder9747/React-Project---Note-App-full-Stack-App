import React, { useState,useContext } from 'react'
import noteContext from '../Context/noteContext'

export default function Notes() {
    const [notes, registerUser,loginUser,createNote] = useContext(noteContext);

    const [state,setState] = useState({
        title:'',
        description:'',
    })
    const handleClick = (e)=>
    {
        console.log(e.target.name,e.target.value)
        setState({...state,[e.target.name]:e.target.value});
    }
    return (
        <>
            <div className="container">

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Add Title</label>
                    <input type="text" onChange={handleClick} name='title' value={state.title} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Add Description </label>
                    <textarea onChange={handleClick} name='description' value={state.description} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-auto">
                    <button type="submit" onClick={()=> createNote(state)} class="btn btn-primary mb-3">Submit</button>
                </div>
            </div>
        </>
    )
}
