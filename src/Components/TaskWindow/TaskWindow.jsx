import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, setTitle } from "../../rdx/Features/APITasks/APITasks";
import { useNavigate, useParams } from "react-router-dom";


const TaskWindow = () => {
  const dispatch = useDispatch();
  let { id } = useParams(); // gets id of task from url parametr to find it in state
  const tasks = useSelector(state => state.apiTasks.taskData);
  const navigate = useNavigate();

  const [taskName, setName] = useState('');
  const [taskStatus, setStatusF] = useState();


  useEffect(() => {
    if ((tasks.find(item => item.id == id) === undefined)) { // if url param undefined it redirrects back where this component not represented
      setName('');
      navigate(`/tasks/`);
    } else if (tasks.find(item => item.id == id)) {
      setName((tasks.find(item => item.id == id).title));
      setStatusF((tasks.find(item => item.id == id).completed));
    }
  }, [id, tasks, dispatch, navigate])

  const nameHandle = (event) => { //handle task title input
    setName(event.target.value);
    dispatch(setTitle({ name: event.target.value, id: id }));
  }

  const statusHandle = (event) => { // handle status select
    setStatusF(typeof event.target.value);
    dispatch(setStatus({ completed: event.target.value, id: id }));
  }




  return <div className="TaskWindow">
    <label className="nameLabel">Task name: </label>
    <textarea type='text' placeholder='task name' name='name' className='inputName' value={taskName} onChange={(event) => nameHandle(event)}></textarea>
    <form>
      <br />
      <hr />
      <label>Status : </label>
      <select className='inputStatus' onChange={(event) => statusHandle(event)} value={taskStatus}>
        <option value={false}>Not started</option>
        <option value={true}>Done</option>
      </select>




    </form>
  </div>;
};
export default TaskWindow;
