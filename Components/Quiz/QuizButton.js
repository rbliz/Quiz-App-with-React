import React from "react"

export default function QuizButton(props){
    return(
        <>
          {props.isFinished? 
                <div className="btn-container">
                    <p className="score-text">You scored {props.score}/{props.questions.length} correct answers</p>
                    <button onClick={props.playAgain} className="btn quizz-btn">
                    Get another quiz!
                    </button>
                </div>
                :
                <button onClick={props.checkAnswers} className="btn quizz-btn">
                Check Answers
                </button>
                }
        </>
    )
}