import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, setTitle } from "../../../rdx/Features/APITasks/APITasks";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const MobileTaskWindow = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    const tasks = useSelector(state => state.apiTasks.taskData);
    const navigate = useNavigate();


    const [taskName, setName] = useState();
    const [taskStatus, setStatusF] = useState();


    useEffect(() => {
        if ((tasks.find(item => item.id == id) == undefined)) {
            setName('');
            navigate(`/tasksm/`);
        } else if (tasks.find(item => item.id == id)) {
            setName((tasks.find(item => item.id == id).title));
            setStatusF((tasks.find(item => item.id == id).completed));
        }
    }, [id, tasks, dispatch, navigate])

    const nameHandle = (event) => {
        setName(event.target.value);
        dispatch(setTitle({ name: event.target.value, id: id }));
    }

    const statusHandle = (event) => {
        setStatusF(event.target.value);
        dispatch(setStatus({ completed: event.target.value, id: id }));
    }


    return <div className="TaskWindowM">

        <div className="MobileTaskWindowHeader">
            <Button onClick={() => { navigate('/tasksm/') }} variant={"outline"}><ArrowBackIosIcon /></Button>
            <input type='text' placeholder='task name' name='name' className='inputName' value={taskName} onChange={(event) => nameHandle(event)}></input>

        </div>
        <form>
            <label>Status : </label>
            <select className='inputStatus' onChange={(event) => statusHandle(event)} value={taskStatus}>
                <option value={false}>Not started</option>
                <option value={true}>Done</option>
            </select>
        </form>
    </div >;
};
export default MobileTaskWindow;
