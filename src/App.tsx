import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  const [filter, setFilter] = useState<'ALL_TASKS' | 'COMPLETED_TASKS' | 'INCOMPLETED_TASKS'>('ALL_TASKS');

  return (
    <TaskProvider>
      <div className="app-container">
        <h1>Task Management App</h1>
        <TaskForm />
        <div className="filter-buttons">
          <button onClick={() => setFilter('ALL_TASKS')}>All</button>
          <button onClick={() => setFilter('COMPLETED_TASKS')}>Completed</button>
          <button onClick={() => setFilter('INCOMPLETED_TASKS')}>Incomplete</button>
        </div>
        <TaskList filter={filter} />
      </div>
    </TaskProvider>
  );
};

export default App;
