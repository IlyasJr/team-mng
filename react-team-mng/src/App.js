import './app.css'
import Tasks from './components/tasks list/Tasks';
import AppContext from './context/AppContext';
import AddTaskForm from './components/add task pop-up/AddTaskForm';
import DialogSlide from './utils/DialogSlide';
import Filters from './components/filters row/Filters';
function App() {
  return (
    <AppContext>
      <Filters/>
      <Tasks/>
      <DialogSlide title='Add task' action= 'add'>
        <AddTaskForm />
      </DialogSlide>
    </AppContext>
  );
}

export default App;
