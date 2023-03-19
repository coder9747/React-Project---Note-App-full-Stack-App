import React from 'react'

export default function Alert(props) {
    return (
       props.message &&  <div class="alert alert-success" role="alert">
           {props.message}
       </div>
    )
}
