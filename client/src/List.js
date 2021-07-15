import Task from './Task';
const List = props => {
  const { tasks, removeTask } = props;
    return (
        <div>
        {tasks.map(task => (
          <Task removeTask={removeTask}
            key={task._id} task={task} />
        ))}
        </div>
    );

};
export default List;
