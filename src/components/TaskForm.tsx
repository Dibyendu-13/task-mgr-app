import React, { useState } from 'react';
import './styles/TaskForm.css'; // Import the CSS file for styling
import { useTaskContext } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim() === '') return; // Prevent adding empty tasks
    addTask(taskText);
    setTaskText(''); // Clear input after adding
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
        className="task-input"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
