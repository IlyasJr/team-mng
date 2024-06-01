import React, { useContext } from 'react'
import './task.css'
import { Context } from '../../context/AppContext'
import DialogSlide from '../../utils/DialogSlide'
import TaskDetail from '../task detail/TaskDetail'


const Task = ({task}) => {
  let {title, status, priority, number} = task
  let {setOpenTask} = useContext(Context)
  return (
    <>
    <div className='task' onClick={() => setOpenTask(true)}>
        <div className="task-title">
            {title} 
        </div>
        <div className="task-data">
           <div className="status"> {status} </div>
           <div className="priority"> {priority} </div>
           <div className="task-number"> 
              <img src="logo192.png" alt="logo192.png"/>
              <div className='number'>{number}</div>
              <img src="logo192.png" alt="logo192.png"/>
           </div>
        </div>
    </div>
    <DialogSlide title='Add task' action= 'update'>
      <TaskDetail task = {task}/>
    </DialogSlide>
    </>
  )
}

export default Task