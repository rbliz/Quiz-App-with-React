import React from "react"
import Question from "./Question"
import Answers from "./Answers/Answers"

export default function QuestionAndAnswers(props){
    return(
       <>
       {props.questions.map((question, index) =>{
                return(
                    <div key={question.id} className="question-answer-container">
                        <Question question={question.text} />
                        <Answers
                            isFinished={props.isFinished}
                            questions={props.questions}
                            handleRadioChange={props.handleRadioChange}
                            question={question}
                            index={index}
                        />
                             
                    </div>
                    )
                })}
       
       </>
    )
}