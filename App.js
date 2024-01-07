import React from "react"
import Quiz from "./Components/Quiz/Quiz"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import {nanoid} from "nanoid"

export default function App(){
//   State   
    const [startQuizz, setStartQuizz] = React.useState(false)
   
//Functions
    function start(){setStartQuizz(true)}
    function restart(){window.location.reload(false)}
//UI
    return(
<main>
    {
       startQuizz
        ?
        <>
        <Quiz start={start} restart={restart} />
        <Footer />
        </>
        :
        <>
        <Home start={start} />
        <Footer />
        </>
    }
</main>
    )
}