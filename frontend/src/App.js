//react component
//default import
import React, { Component} from "react";
//in JavaScript the default and named imports are split, you can't import a named import the same as the default AND there is only one single default export
//Above is a member import(named import), member imports are exported with export ...
import "./App.css"

class App extends Component{
    render(){
        return(
        <div className = "app">
        <h1>Tales of Wucifer</h1>
        </div>
        );
    }
}

export default App; 