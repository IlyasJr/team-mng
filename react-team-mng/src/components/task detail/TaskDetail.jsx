import React from 'react'
import './taskDetail.css'

const TaskDetail = ({task}) => {
    let splitted = task.number.split('_')
    let number =  splitted[splitted.length-1] 
  return (
    <div>{number}</div>
  )
}

export default TaskDetail