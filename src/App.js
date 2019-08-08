import React from 'react'
import './App.css'
import Messages from "./Components/Messages"
import Users from "./Components/Users"
import Menu from "./Components/Menu"
import {BrowserRouter, Route} from "react-router-dom"

const App = (props) => { 
   return (
      <BrowserRouter>
         <div className = "app" >
            <div className="header">Шапка</div>
            <div className="container">
               <Menu />
               <div className="content">
                  <Route path="/showMessages" render={()=><Messages 
                                                   db={props.db}
                                                   handlerClick={props.handlerClick}
                                                   handlerTags={props.handlerTags}
                                                   filteredNotes={props.filteredNotes}
                                                   reset={props.reset}
                                                />
                  }/>

                  <Route path="/showUsers" render={() =>
                     <Users 
                        db = {props.db}                           
                     /> 
                 }/>               
               </div>
            </div>
         </div>
      </BrowserRouter>
   )
}



export default App
