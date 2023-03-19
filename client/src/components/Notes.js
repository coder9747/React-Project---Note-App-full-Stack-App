import React, { useState, useContext, useRef } from 'react'
import noteContext from '../Context/noteContext'
import NoteItems from './NoteItems';

export default function Notes() {
    const [notes, registerUser, loginUser, createNote,deleteNote,updateNote] = useContext(noteContext);

    const [state, setState] = useState({
        title: '',
        description: '',
    })
    const [mstate, setmState] = useState({
        mtitle: "",
        mdescription: "",
        id: '',
    })
    const handleClick2 = (e) => {
        setmState({ ...mstate, [e.target.name]: e.target.value });

    }
    const ref = useRef(null);
    const openModel = (obj) => {
        setmState({
            mtitle: obj.title,
            mdescription: obj.description,
            mid:obj.id
        })
        ref.current.click();
    }
    const handleClick = (e) => {
        console.log(e.target.name, e.target.value)
        setState({ ...state, [e.target.name]: e.target.value });
    }
    const updateReq = ()=>
    {
        const newObj = {
            title:mstate.mtitle,
            description:mstate.mdescription,
            id:mstate.mid
        }
        updateNote(newObj);
        
    }
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Add Title</label>
                    <input type="text" onChange={handleClick} name='title' value={state.title} className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Add Description </label>
                    <textarea onChange={handleClick} name='description' value={state.description} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <div class="col-auto">
                    <button type="submit" onClick={() => createNote(state)} class="btn btn-primary mb-3">Submit</button>
                </div>
                <div className="row">
                    {notes.map((obj, idx) => {
                      
                        return (<NoteItems key={idx} {...obj} openModel={openModel} />)
                    })}
                </div>
                <button type="button" ref={ref} class="btn d-none btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">

                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Model</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Edit Title</label>
                                    <input type="text" onChange={handleClick2} name='mtitle' value={mstate.mtitle} className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Add Description </label>
                                    <textarea onChange={handleClick2} name='mdescription' value={mstate.mdescription} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={updateReq}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
