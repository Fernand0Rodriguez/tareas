import Form from './Form';
import List from './List';
import { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {

  const [tasks, setTasks] = useState([]);
    useEffect(() => {
      axios.get('/api/tasks')
        .then(res => {
          console.log(res.data);
          setTasks(res.data);
        })
    }, []);

  const addTask = task => {
    axios.post('/api/tasks', task)
      .then(res => {
        console.log(res.data)
        setTasks ([...tasks, res.data]);
      });
  };

  const removeTask = id => {
    axios.delete('/api/tasks/' + id)
      .then(res => {
        const newTasks = tasks.filter(t => t._id !== id);
        setTasks(newTasks);
      })
  };

  const styles = {
    color: 'red',
    fontSize: 72
  };

  return (
    <div className="container">
      <h1 style={styles}>Lista de tareas</h1>
      <Form  addTask={addTask} />
      <List removeTask={removeTask}
      tasks={tasks} />
    </div>
  );

};

export default App;
