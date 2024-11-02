import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    
    const handleTaskDeletion = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${task.id}`);

            await fetchTasks();

            toast.success("A tarefa foi removida com sucesso!");
        } catch (_error) {
            toast.error("Algo deu errado.");
        }
    };

    const handleTaskCompleted = async(e) => {
        try {
            await axios.patch(`${process.env.REACT_APP_API_URL}/tasks/${task.id}`, {
                isCompleted: e.target.checked,
            });

            await fetchTasks();

            toast.success("Tarefa foi modificada com sucesso");

        } catch (_error) {
            toast.error("Algo deu errado");
        }
    }

    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    
                    <input type="checkbox" defaultChecked={task.isCompleted} onChange={(e) => handleTaskCompleted(e)} />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>

            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="#F97474"
                    onClick={handleTaskDeletion}
                />
            </div>
        </div>
    );
};

export default TaskItem;
