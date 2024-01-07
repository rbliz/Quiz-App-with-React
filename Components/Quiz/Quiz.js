import React from "react"
import QuestionAndAnswers from "./QuestionAndAnswers/QuestionAndAnswers"
import QuizButton from "./QuizButton"


import {nanoid} from "nanoid"

export default function Quiz(props){
    
const [questions, setQuestions] = React.useState([])
const [isFinished, setIsFinished] = React.useState(false)
const [score, setScore] = React.useState(0)
    
// Side Effects
React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5")
        .then(res=>res.json())
        .then(data=>{
            const quizzArray = data.results.map(item=>{
                const incorrectAnswersArray = item.incorrect_answers.map((inc)=>{
                                   return inc
                })
                incorrectAnswersArray.push(item.correct_answer)

                const shuffledArray = incorrectAnswersArray.sort(() => {
                            const randomTrueOrFalse = Math.random() > 0.5
                                    return randomTrueOrFalse ? 1 : -1
                        })
                                    return {
                                        id: nanoid(),
                                        text: item.question,
                                        answers: shuffledArray,
                                        correctAnswer: item.correct_answer,
                                        selectedAnswer: null,
                                        score: 0
                                    }
                //  console.log(shuffledArray)
            })
            setQuestions(quizzArray)
        })
    },[props.start])
//    console.log(questions)
//   console.log(score)
 
React.useEffect(()=>{
    const scoresArr = questions.map((question)=>{
            return question.score
        })
        let sum = 0
        for(let i=0; i < scoresArr.length; i++){
            sum += scoresArr[i]
        }
        setScore(sum)
    },[questions])
 
function checkAnswers(){
        setIsFinished(!isFinished)
    }
  
const handleRadioChange = (index, answer) => {
      const updatedQuestions = [...questions]
            updatedQuestions[index].selectedAnswer = answer
            if(updatedQuestions[index].selectedAnswer === updatedQuestions[index].correctAnswer){
            updatedQuestions[index].score = 1
      }
      else{updatedQuestions[index].score = 0}
    // Update the state with the selected answer for the question in the index provided
     // console.log(updatedQuestions[index].selectedAnswer)
      setQuestions(updatedQuestions);
}


return( 
    <div>
       <div className="quizz-container">
            
                <QuestionAndAnswers
                    isFinished={isFinished}
                    score={score}
                    questions={questions}
                    handleRadioChange={handleRadioChange}
                    
                />
                <QuizButton
                    isFinished={isFinished}
                    score={score}
                    questions={questions}
                    checkAnswers={checkAnswers}
                    playAgain={props.restart}
                />   
            </div>
      </div>  
    )
}