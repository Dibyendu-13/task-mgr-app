import React from 'react';
import './styles/TaskItem.css'; 

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, completeTask, deleteTask }) => {
  return (
    <li className="task-item">
      <span
        className="task-text"
        style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#888' : '#000' }}
      >
        {task.text}
      </span>
      <div className="task-actions">
        <button
          className={`complete-button ${task.completed ? 'completed' : ''}`}
          onClick={() => completeTask(task.id)}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="delete-button"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
