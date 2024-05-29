import React, { useContext } from 'react'
import { useFormik } from 'formik';
import SelectInput from '../../utils/SelectInput';
import TextField from '@mui/material/TextField';
import './addTaskForm.css'
import AppButton from '../../utils/AppButton';
import { Context } from '../../context/AppContext';


const AddTaskForm = () => {
    let {tasks, setTasks, currentUser, nextTaskNumber, setNextTaskNumber} = useContext(Context)

    const formik = useFormik({
        initialValues: {
          title: '',
          description: '',
          type: '',
          priority: ''
        },
        onSubmit: values => {
        setTasks([...tasks, {
            ...values,
            status : 'IN DESIGN',
            creator: currentUser,
            creationDate : new Date(),
            number : `PROJECT_NAME_${nextTaskNumber}`
        }]) 
        setNextTaskNumber(n=> n+1)
        },
      });

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
         id="title"
         name="title"
         label="Task title"
         variant="outlined"
         onChange={formik.handleChange}
         value={formik.values.title}
         />
         <TextField
         name="description"
         label="Task description"
         variant="outlined"
         onChange={formik.handleChange}
         value={formik.values.description}
         multiline
         maxRows={6}
         rows={4}
         />
       <SelectInput
         name="type"
         handleChange={formik.handleChange}
         value={formik.values.type}
         label="Task type"
         options={['Bug', 'Meeting', 'Story', 'sub-Bug', 'sub-story']}
        />   
        <SelectInput
         name="priority"
         handleChange={formik.handleChange}
         value={formik.values.priority}
         label="Task priority"
         options={['Low', 'Normal', 'High', 'Highest']}
        />   
        <AppButton text={"Submit"}/>
    </form>
  )
}

export default AddTaskForm