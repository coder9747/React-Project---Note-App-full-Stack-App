import React, {useContext} from 'react'
import noteContext from '../Context/noteContext';
export default function NoteItems({ title, description,_id }) {
    const [notes, registerUser,loginUser,createNote,deleteNote] = useContext(noteContext);

    return (
        <div class="card col-md-4 mx-3 my-2" style={{ width: "18rem" }}>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <button className='btn border border-primary mx-1'>

                    <i class="fa-solid fa-pencil mx-2"></i>
                </button>
                <button className='btn border border-primary mx-1' onClick={()=>deleteNote(_id)} >

                    <i class="fa-sharp fa-solid fa-trash mx-2"></i>
                </button>
            </div>
        </div>
    )
}
