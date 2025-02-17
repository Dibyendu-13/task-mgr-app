import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';


export interface Task {
  id: number;
  text: string;
  completed: boolean;
}


const TaskContext = createContext<{
  tasks: Task[];
  addTask: (text: string) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}>({ tasks: [], addTask: () => {}, completeTask: () => {}, deleteTask: () => {} });


interface TaskProviderProps {
  children: ReactNode;
}


export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const completeTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
