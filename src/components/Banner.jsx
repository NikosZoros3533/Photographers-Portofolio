import quotes from "../quotes"
import { useState } from "react";

export default function Banner(){
    const [randomIndex,setRandomIndex]=useState(Math.floor(Math.random() * quotes.length));
    
    function getRandomIndex(){
         setRandomIndex(Math.floor(Math.random() * quotes.length));
    }
    
    
    return <div id="banner" onClick={getRandomIndex}><h1>{`"${quotes[randomIndex]}"`}</h1></div>

}