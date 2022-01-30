import React from "react"

export default function Title(props){
    return (
        <React.Fragment>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        </React.Fragment>
    )

   
}