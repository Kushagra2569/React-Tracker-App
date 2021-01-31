import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {

  const [tasks ,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        reminder: true
    },
    {
        id: 2,
        text: 'Walk the dog',
        reminder:  false
    }
  ]);
  const [showAddTask, setShowAddTask] = useState(false)

  function addTask(task) {
    console.log(task);
    let id = 1;
    for(id = 1;id<99;id++){
      let isUsed = false
      tasks.filter(function (task) {
        if (task.id === id){
          isUsed = true;
        }
        return isUsed;
      })
      if(!isUsed){
        break;
      }
    }
    console.log("task id " + id);
    const newTask = {id , ...task};
    setTasks([...tasks , newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(function (task) {
      return task.id !== id;
    }))
  }

  function toggleReminder(id) {
    setTasks(tasks.map(function (task) {
      return task.id === id ? {...task,reminder: !task.reminder } : task
    }))
  }

  return (
    <Router>
      <div className="container">
        <Header onShowAddTask = {function () {
          setShowAddTask(!showAddTask)
        }} showAdd = {showAddTask} />

        <Route path = '/' exact render = {(props) => (
          <>
           {showAddTask && <AddTask onAdd = {addTask} />}
           {tasks.length > 0? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> : 'No Tasks to show'}
           <Footer />
          </>
        )} />
        <Route path = '/about' component = {About} />
      </div>
    </Router>
  );
}

export default App;
