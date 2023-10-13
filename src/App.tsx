import React, {MouseEvent} from "react";
import './App.css';
import {Button} from "./Components/Button";

function App() {

    const Button1Foo = (subscriber:string, age: number) => {
console.log(subscriber,age)
    }

    const Button2Foo = (subscriber:string, age: number) => {
console.log(subscriber,age)
    }

    const Button3Foo = () => {
        console.log("I'm a dumb button")
    }

    return (
        <div className="App">
            <Button name={"MyYouTubeChanel-1"}
                    callBack={()=>Button1Foo("Roma",29)}/>
            <Button name={"MyYouTubeChanel-2"}
                    callBack={()=>Button2Foo("Ann", 30)}/>
            <Button name={"Dumb button"} callBack={Button3Foo}/>
        </div>
    );
}

export default App;
