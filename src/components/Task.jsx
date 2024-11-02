import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "./Task.scss";

import TaskItem from "./TaskItem";
import AddTask from "./Addtask";

const Task = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}/tasks`
            );

            setTasks(data);
        } catch (_error) {
            toast.error("Não foi possível recuperar as tarefas");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const lastTask = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    const completedTask = useMemo(() => {
        return tasks.filter((task) => task.isCompleted);
    }, [tasks]);

    return (
        <div className="tasks-container">
            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {lastTask.map((lastTask) => (
                        <TaskItem
                            key={lastTask.id}
                            task={lastTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {completedTask.map((completedTask) => (
                        <TaskItem
                            key={completedTask.id}
                            task={completedTask}
                            fetchTasks={fetchTasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Task;
