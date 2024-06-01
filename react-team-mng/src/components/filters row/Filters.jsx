import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import './filters.css'
import { Context } from '../../context/AppContext';
import SelectInput from '../../utils/SelectInput';
import AppButton from '../../utils/AppButton';

const Filters = () => {
    let {filtersForm, handleClickOpen, setFilters} = useContext(Context)
    let {handleChange, values, handleSubmit, resetForm} = filtersForm
   
    console.log('filtersForm', filtersForm)

    return (
        <div className='filter-header'>
            <div className="filters" onSubmit={handleSubmit}>
                <h3>filter By :</h3>
                <div className="filter-item">
                    <TextField
                        id="number"
                        name="number"
                        label="Filter by task number"
                        variant="outlined"
                        onChange={handleChange}
                        value={values.number}
                        sx={{ backgroundColor: 'white', border: 'none', "& fieldset": { border: 'none' }, height: '5vh' }}
                    />
                </div>
                <div className="filter-item">
                    <SelectInput
                        name="type"
                        handleChange={handleChange}
                        value={values.type}
                        label="type"
                        options={['Bug', 'Meeting', 'Story', 'sub-Bug', 'sub-story']}
                        color="rgb(66, 65, 65)"
                        backgroundColor="white"
                    />
                </div>
                <div className="filter-item">
                    <SelectInput
                        name="priority"
                        handleChange={handleChange}
                        value={values.priority}
                        label="priority"
                        options={['Low', 'Normal', 'High', 'Highest']}
                        color="rgb(66, 65, 65)"
                        backgroundColor="white"
                    />
                </div>
                <div className="filter-item">
                    <SelectInput
                        name="responsible"
                        handleChange={handleChange}
                        value={values.responsible}
                        label="responsible"
                        options={['Kamal', 'Jamal', 'Samir', 'Hamdi']}
                        color="rgb(66, 65, 65)"
                        backgroundColor="white"
                    />
                </div>
                <div className="filter-btn-collection">
                    <AppButton text={"Apply filter"} onClick={handleSubmit} />
                    <AppButton text={"Delete filter"} onClick={() => 
                       {
                        resetForm()
                        setFilters({
                            number: '',
                            responsible: '',
                            type: '',
                            priority: ''
                        })
                       }
                     } />
                </div>
            </div>
            <div className="add">
                <AppButton text={"Add Task"} onClick={handleClickOpen} />
            </div>
        </div>
    )
}

export default Filters