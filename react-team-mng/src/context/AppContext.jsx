import React, { useState } from 'react'
import { useFormik } from 'formik';
import { validationSchema } from './Validation';
import { filterValidationSchema } from './Validation';




export const Context = React.createContext()

const AppContext = ({children}) => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [currentUser, setCurrentUser] = useState('hamdi')
  const [nextTaskNumber, setNextTaskNumber] = useState(1)
  const steps = ['IN DESIGN', 'DESIGN TECH', 'TO DO', 'IN PROGRESS', 'TEST', 'INVALID', 'DONE']
  const [open, setOpen] = React.useState(false);
  const [openTask, setOpenTask] = React.useState(false);
  const [filters, setFilters] = React.useState({number: '', responsible: '', type: '', priority: ''})

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      type: '',
      priority: ''
    },
    onSubmit: (values, {resetForm}) => {
    setTasks([...tasks, {
        ...values,
        status : 'IN DESIGN',
        creator: currentUser,
        responsible : currentUser,
        creationDate : new Date(),
        number : `PROJECT_NAME_${nextTaskNumber}`
    }]) 
    setNextTaskNumber(n=> n+1)
    handleClose()
    resetForm()
    },
    validationSchema
  });

  const filtersForm = useFormik({
    initialValues: {
      number: '',
      responsible: '',
      type: '',
      priority: ''
    },
    onSubmit: (values) => {
    setFilters({...values}) 
    },
    validationSchema : filterValidationSchema
  });

  const getTasksToDisplay = () => {
    let tasksCopy = [...tasks]
    tasksCopy = tasksCopy.filter(task =>
      (task.number.includes(filters.number) || filters.number === '')
      &&
      (task.responsible.includes(filters.responsible) || filters.responsible === '')
      &&
      (task.type.includes(filters.type) || filters.type === '')
      &&
      (task.priority.includes(filters.priority) || filters.priority === '')
    )
    setFilteredTasks(tasksCopy)
  }
  

  const provider = {
    tasks,setTasks,
    currentUser,setCurrentUser,
    nextTaskNumber,setNextTaskNumber,
    steps,
    formik,
    open,handleClickOpen,handleClose,
    openTask,setOpenTask,
    filters, setFilters,
    filtersForm,getTasksToDisplay,
    filteredTasks, setFilteredTasks
  }
  
  return (
    <Context.Provider value={provider}>
     {children}
    </Context.Provider>
  )
}

export default AppContext