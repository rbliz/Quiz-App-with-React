import React from "react"
import {decode} from 'html-entities'

export default function Question(props){
    return(
        <>
            <h2 className="question">{decode(props.question)}</h2>
        </>
    )
}