import React from 'react';
import './styles/TaskList.css'; 
import TaskItem from './TaskItem';
import { useTaskContext } from '../context/TaskContext';

interface TaskListProps {
  filter: 'ALL_TASKS' | 'COMPLETED_TASKS' | 'INCOMPLETED_TASKS';
}

const TaskList: React.FC<TaskListProps> = ({ filter }) => {
  const { tasks, completeTask, deleteTask } = useTaskContext();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'COMPLETED_TASKS') return task.completed;
    if (filter === 'INCOMPLETED_TASKS') return !task.completed;
    return true; 
  });

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
