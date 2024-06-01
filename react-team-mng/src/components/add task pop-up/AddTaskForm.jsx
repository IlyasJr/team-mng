import React, { useContext } from 'react'
import SelectInput from '../../utils/SelectInput';
import TextField from '@mui/material/TextField';
import './addTaskForm.css'
import AppButton from '../../utils/AppButton';
import { Context } from '../../context/AppContext';

const AddTaskForm = () => {
    let { formik } = useContext(Context)
    let {handleSubmit, errors, touched, handleChange, values } = formik
    
  return (
    <form onSubmit={handleSubmit}>
        <div className="field">
        {errors.title && touched.title && <h6>{errors.title}</h6>}
        <TextField
         id="title"
         name="title"
         label="Task title"
         variant="outlined"
         onChange={handleChange}
         value={values.title}
         />
        </div>
       <div className="field">
       {errors.type && touched.type && <h6>{errors.type}</h6>}
       <SelectInput
         name="type"
         handleChange={handleChange}
         value={values.type}
         label="Task type"
         options={['Bug', 'Meeting', 'Story', 'sub-Bug', 'sub-story']}
         color="rgb(66, 65, 65)"
         backgroundColor="white"
        />    
       </div>
        <div className="field">
        {errors.priority && touched.priority &&  <h6>{errors.priority}</h6>}
        <SelectInput
         name="priority"
         handleChange={handleChange}
         value={values.priority}
         label="Task priority"
         options={['Low', 'Normal', 'High', 'Highest']}
         color="rgb(66, 65, 65)"
         backgroundColor="white"
        />  </div> 
        <div className="field">
        {errors.description && touched.description && <h6>{errors.description}</h6>}
         <TextField
         name="description"
         label="Task description"
         variant="outlined"
         onChange={handleChange}
         value={values.description}
         multiline
         rows={8}
         />
        </div>
        <AppButton text={"Submit"}/>
    </form>
  )
}

export default AddTaskForm