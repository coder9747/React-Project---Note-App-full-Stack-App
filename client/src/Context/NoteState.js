import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const navigate = useNavigate();
    const host = "http://localhost:4500"
    const [notes, setNotes] = useState([]);
    

    const registerUser = async (props) => {
        //calling api 
        const url = `${host}/api/user/register`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(props)
        })
        const res = await response.json();
        console.log(res)
        if (res.status === 'succes') {
            navigate('/login');
        }
        else {
            navigate("/register");
        }
    }
    const loginUser = async(props)=>
    {
        const url = `${host}/api/user/login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(props)
        })
        const res = await response.json();
        if(res.status === 'succes')
        {
            localStorage.setItem("token",res.token);
            navigate('/home');
        }
        else
        {
            navigate("/login");

        }
        
    }
    const createNote = async(props)=>
    {
        const url = `${host}/api/notes/create`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization":`Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(props),

        })
        const res = await response.json();
        console.log(res)
    }





    return (
        <NoteContext.Provider value={[notes, registerUser,loginUser,createNote]}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;