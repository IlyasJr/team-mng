import React, { useState } from 'react'


export const Context = React.createContext()

const AppContext = ({children}) => {
  const [tasks, setTasks] = useState([])
  const [currentUser, setCurrentUser] = useState('hamdi')
  const [nextTaskNumber, setNextTaskNumber] = useState(1)
  const steps = ['IN DESIGN', 'DESIGN TECH', 'TO DO', 'IN PROGRESS', 'TEST', 'INVALID', 'DONE']


  return (
    <Context.Provider value={{tasks, setTasks, currentUser,setCurrentUser, nextTaskNumber, setNextTaskNumber, steps}}>
     {children}
    </Context.Provider>
  )
}

export default AppContext