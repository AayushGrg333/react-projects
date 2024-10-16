import React, { useEffect, useState } from "react";
import './style.css'
import TodoItem from "./todoitems";
import { eventNames } from "process";

const TodoContainer: React.FC = function(){

    const [task,setTask] = useState<string>('');
    const [taskList,setTaskList] = useState<string[]>([]);//array of string

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{//note this
        setTask(event.target.value);
    }

    const addTask = ()=>{
        if(task.trim() !== ''){
            setTaskList([...taskList,task])//making array
            setTask('');
        }else{
            console.error("Your task is empty")
        }
    };

    const handleDelete = (index:number)=>{
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index,1);
        setTaskList(updatedTaskList)
    }

    return (
        <div className="todoContainer">
            <div className="todo items">
                <ol>
                    {
                        taskList.map((item,index)=>(
                            <TodoItem
                                key={index} 
                                task={item}
                                index={index}
                                handleDelete={() => handleDelete(index)} 
                             />
                        ))
                    }
                </ol>
            </div>

            <div className="input">
              <input type="text" value={task} placeholder="Add a task!" onChange={handleInputChange} />
              <button id="add-btn" type="button" onClick={addTask} >Add</button>
            </div>
        </div>
    )
}

export default TodoContainer;