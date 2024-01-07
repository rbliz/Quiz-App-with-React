import React from "react"
import {decode} from 'html-entities'

export default function Options(props){
    return(
        <>
         {props.question.answers.map((answer)=>{
                                    return(
                                        <div className="answer">
                                                    <label 
                                                        className="radio-label" 
                                                        key={answer}
                                                        style={
                                                                    {
                                                                        backgroundColor: props.questions[props.index].selectedAnswer === answer?
                                                                        "#faedcd": "white",
                                                                        border:  props.questions[props.index].selectedAnswer === answer?
                                                                        "none": 
                                                                        "1.5px solid #432818"
                                                                    }
                                                              }
                                                     >
                                                    <input 
                                                        type="radio"
                                                        className="radio-input"
                                                        value={answer}
                                                        checked={props.questions[props.index].selectedAnswer === answer}
                                                        onChange={() => props.handleRadioChange(props.index,answer)}
                                                    />
                                                    {decode(answer)}
                                                    </label>
                                        </div>
                       
                                    )
                    })}
        </>
    )
}