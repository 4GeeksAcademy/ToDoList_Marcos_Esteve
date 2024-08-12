import React, {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"


const ToDoList = () => {
    const [task, setTask] = useState("") 
    const [taskList, setTaskList] = useState([])
    function newTask (event){
        if (event.key ==="Enter" && task.trim() !==""){
            setTaskList([...taskList, task]);
            setTask ("")
        }
    }
    function deleteTask (index){
        setTaskList(taskList.filter((_, i) => i !== index));
    }
    return (
        <>
        <div className="d-flex flex-column align-items-center justify-content-center ">
            <div className="mb-3 w-50">
                <input type="tasks" value={task} onChange = {(event)=> setTask(event.target.value)} onKeyDown={newTask}  className="form-control" id="exampleFormControlInput1" placeholder="Whats need to be done?"/>
            </div>
            <ul className = "w-50 p-0">
                {taskList.map((task, index) => (
                    <li className="lista p-0 d-flex justify-content-betwee" key = {index}>{task}<FontAwesomeIcon className="iconoEliminar" icon={faXmark} onClick={() => deleteTask(index)}/></li>
                ))}
            </ul>
        </div>
        </>
    
)}

export default ToDoList

