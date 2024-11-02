import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./Addtask.scss";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return toast.error("A tarefa precisa de uma descrição para ser adicionada.");
            }

            await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, {
                description: task,
                isCompleted: false
            });

            await fetchTasks();

            toast.success("A tarefa foi adicionada com sucesso");

            setTask("");
        } catch (_error) {
            toast.error("Algo deu errado.");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
