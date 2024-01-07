import React from "react"
import {decode} from 'html-entities'

export default function CorrectOption(props){
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
                                                                    backgroundColor: props.questions[props.index].selectedAnswer === answer? "#04e762": "white",
                                                                    color: props.questions[props.index].selectedAnswer === answer? "black": "#e2e2e2",
                                                                    border: props.questions[props.index].selectedAnswer === answer? "none": "1px solid #e2e2e2"
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