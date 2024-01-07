import React from "react"
import Options from "./Options/Options"
import CorrectOption from "./Options/CorrectOption"
import IncorrectOption from "./Options/IncorrectOption"

export default function Answers(props){
    return(
        <>
           {props.isFinished && props.questions[props.index].selectedAnswer === props.questions[props.index].correctAnswer?
                    <div className="answers-container">
                            <CorrectOption
                                questions={props.questions}
                                handleRadioChange={props.handleRadioChange}
                                question={props.question}
                                index={props.index}
                            />
                                     
                    </div> 
                    :
            props.isFinished && props.questions[props.index].selectedAnswer != props.questions[props.index].correctAnswer?
                    <div className="answers-container">
                             <IncorrectOption 
                                 questions={props.questions}
                                 handleRadioChange={props.handleRadioChange}
                                question={props.question}
                                 index={props.index}
                             />
                               
                    </div> 
                    :
                    <div className="answers-container">
                            <Options 
                                 questions={props.questions}
                                 handleRadioChange={props.handleRadioChange}
                                question={props.question}
                                 index={props.index}
                            />
                               
                    </div>
            }
        </>
    )
}