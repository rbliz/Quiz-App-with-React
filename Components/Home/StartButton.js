import React from "react"

export default function StartButton(props){
    return(
        <button className="btn start-quizz-btn" onClick={props.start}>
        Start quizz
        </button>
    )
}