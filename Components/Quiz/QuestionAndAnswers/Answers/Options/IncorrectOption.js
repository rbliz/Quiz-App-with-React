import React from "react"
import {decode} from 'html-entities'

export default function IncorrectOption(props){
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
                                                                    backgroundColor: props.questions[props.index].selectedAnswer === answer? "#f8bcbc"
                                                                    :
                                                                    props.questions[props.index].selectedAnswer != answer 
                                                                    && 
                                                                    props.questions[props.index].correctAnswer != answer? "white": "#04e762",
                                                                    color: props.questions[props.index].selectedAnswer === answer? "#e2e2e2"
                                                                    : 
                                                                    props.questions[props.index].selectedAnswer != answer 
                                                                    && 
                                                                    props.questions[props.index].correctAnswer != answer? "#e2e2e2": "black",
                                                                    border: props.questions[props.index].selectedAnswer === answer? "none"
                                                                    :
                                                                    props.questions[props.index].selectedAnswer != answer 
                                                                    && 
                                                                    props.questions[props.index].correctAnswer != answer? "1px solid #e2e2e2": "none"
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