import React, {useEffect} from 'react'
import './tasks.css'
import Task from '../task/Task'
import { useContext } from 'react'
import { Context } from '../../context/AppContext'
const Tasks = () => {

    let {tasks, steps, getTasksToDisplay, filteredTasks, setFilteredTasks, filters} = useContext(Context)

    useEffect(() => {
      getTasksToDisplay()
    }, [tasks, filters])
    

  return (
    <>
    <div className='tasks-summary'>
      {steps.map((step, index) => (
      <div key={index} className="step">
        <div className="step-title">
        <h4>{step}</h4>
        </div>
        {filteredTasks.map(task => task.status === step && <Task task = {task} key={task.number}/>
        )}
      </div>
      ))}
    </div>
      </>

  )
}

export default Tasks