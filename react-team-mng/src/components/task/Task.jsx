import React from 'react'
import './task.css'

const Task = ({task}) => {
  let {title, status, priority, number} = task
  return (
    <>
    <div className='task'>
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
    </>
  )
}

export default Task