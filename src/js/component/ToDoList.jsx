import React, {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"


const ToDoList = () => {
    const [task, setTask] = useState("") 
    const [taskList, setTaskList] = useState([])
    const [counterTask, setCounterTask] = useState(0)
    const [counterDone, setCounterDone] = useState(0)
    function newTask (event){
        if (event.key ==="Enter" && task.trim() !==""){
            setTaskList([...taskList, task]);
            setTask ("")
            setCounterTask(counterTask +1) 
        }
    }
    function deleteTask (index){
        setTaskList(taskList.filter((_, i) => i !== index));
        setCounterTask(counterTask - 1) 
        setCounterDone(counterDone + 1)
    }
    return (
        <>
        <div className="d-flex flex-column align-items-center justify-content-center ">
            <div className=" inputContainer">
                <input type="tasks" value={task} onChange = {(event)=> setTask(event.target.value)} onKeyDown={newTask}  className="form-control inputUser" id="exampleFormControlInput1" placeholder="Whats need to be done?"/>
            </div>
            <ul className = " p-0 m-0">
                {taskList.map((task, index) => (
                    <li className="lista p-2 mt-1 d-flex justify-content-between align-items-center" key = {index}>{task}<FontAwesomeIcon className="iconoEliminar" icon={faXmark} onClick={() => deleteTask(index)}/></li>
                ))}
            </ul>
            <div className = "d-flex justify-content-between itemsCounter align-items-center mt-1 p-1 ">
                <p className=" mb-0">
                    {counterTask} items left
                </p>
                <p className="mb-0">
                    {counterDone} items complete
                </p>
            </div>
        </div>
        </>
    
)}

export default ToDoList

