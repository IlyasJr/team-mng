import './app.css'
import Tasks from './components/tasks list/Tasks';
import AppContext from './context/AppContext';
import AddTaskForm from './components/add task pop-up/AddTaskForm';
import DialogSlide from './utils/DialogSlide';
function App() {
  return (
    <AppContext>
      <Tasks/>
      <DialogSlide title='Add task'>
        <AddTaskForm />
      </DialogSlide>
    </AppContext>
  );
}

export default App;
