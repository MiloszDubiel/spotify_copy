import React, { Component } from "react";
import Menu from './Menu/Menu' 
import Main from './Main Content/MainContent'
import Details from './Details/Details'
import './App.css'

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Menu />
                <main style={{display: 'flex'}}>
                    <Main />
                    <Details />
                </main>
            </React.Fragment>
        )
    }
}
export default App




