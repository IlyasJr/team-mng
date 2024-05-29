import React from 'react'
import './utils.css'

const AppButton = ({ text, onClick }) => {
    return (
        <button variant="outlined" className='btn' type='submit' onClick={onClick}>
            {text}
        </button>
    )
}

export default AppButton