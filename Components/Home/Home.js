import React from "react"
import Header from "./Header"
import Description from "./Description"
import StartButton from "./StartButton"

export default function Home(props){
    return(
          <div className="home-container">
             <Header />
             <Description />
             <StartButton start={props.start} />
        </div>
    )
}