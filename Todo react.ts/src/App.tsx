import React  from "react";
import './index.css'
import TodoContainer from "./components/todolist";

const App: React.FC = function(){
   return (
      <div className="app-container" >
         <header>
            <h1>My Todo List</h1>
         </header>
               <TodoContainer />
      </div>
   );
}

export default App;