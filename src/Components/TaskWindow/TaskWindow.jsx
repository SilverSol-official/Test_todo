import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentId, setDeadLine, setDescription, setStartDate, setStatus, setTitle } from "../../rdx/Features/Tasks/Tasks";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const TaskWindow = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const tasks = useSelector(state => state.tasks);
  const archive = useSelector(state => state.tasks);
  const navigate = useNavigate();


  const [taskName, setName] = useState('');
  const [taskStatus, setStatusF] = useState();
  const [taskDescription, setDescriptionF] = useState('');
  const [taskStartDate, setStartDateF] = useState();
  const [taskEndDate, setEndDateF] = useState();
  const [archived, setArchived] = useState();

  useEffect(() => {
    dispatch(setCurrentId({ id: id }));
    if ((tasks.tasks.find(item => item.id === id) === undefined) && (tasks.archive.find(item => item.id === id) === undefined)) {
      setName('');
      navigate(`/tasks/`);
    } else if (tasks.tasks.find(item => item.id === id)) {
      setName((tasks.tasks.find(item => item.id === id).title));
      setStatusF((tasks.tasks.find(item => item.id === id).status));
      setDescriptionF((tasks.tasks.find(item => item.id === id).description));
      setStartDateF((tasks.tasks.find(item => item.id === id).startDate));
      setEndDateF((tasks.tasks.find(item => item.id === id).dateEnd));
      setArchived((tasks.tasks.find(item => item.id === id).archived));
    } else if (tasks.archive.find(item => item.id === id)) {
      setName((tasks.archive.find(item => item.id === id).title));
      setStatusF((tasks.archive.find(item => item.id === id).status));
      setDescriptionF((tasks.archive.find(item => item.id === id).description));
      setStartDateF((tasks.archive.find(item => item.id === id).startDate));
      setEndDateF((tasks.archive.find(item => item.id === id).dateEnd));
      setArchived((tasks.archive.find(item => item.id === id).archived));
    }
  }, [id, archive, tasks, dispatch])

  const nameHandle = (event) => {
    setName(event.target.value);
    dispatch(setTitle({ name: event.target.value }));
  }

  const statusHandle = (event) => {
    setStatusF(event.target.value);
    dispatch(setStatus({ status: event.target.value }));
  }

  const descriptionHandle = (event) => {
    setDescriptionF(event.target.value);
    dispatch(setDescription({ description: event.target.value }));
  }

  const startDateHandle = (event) => {
    setStartDateF(event.target.value);
    dispatch(setStartDate({ startDate: event.target.value }));
  }

  const endDateHandle = (event) => {
    setEndDateF(event.target.value);
    dispatch(setDeadLine({ deadLine: event.target.value }));
  }


  return <div className="TaskWindow">
    <form>

      {archived ? <Typography variant="h4">Task name: {taskName}</Typography> :
        <>
          <label className="nameLabel">Task name: </label>
          <input type='text' placeholder='task name' name='name' className='inputName' value={taskName} onChange={(event) => nameHandle(event)}>

          </input>
        </>}
      <br />
      <hr />
      {archived ? <><Typography variant='h5'>Sattus: {taskStatus}</Typography></> : <> <label>Status : </label>
        <select className='inputStatus' onChange={(event) => statusHandle(event)} value={taskStatus}>
          <option value="Not started">Not started</option>
          <option value="In process">In process</option>
          <option value="Done">Done</option>
          <option value="Break">Break</option>
        </select></>}

      <br />
      <br />
      {archived ?
        <>
          <label>Start date : </label>
          <input type="datetime-local" disabled name="start" id="" className="inputStatus" onChange={(event) => { startDateHandle(event) }} value={taskStartDate} />
          <label> End date : </label>
          <input type="datetime-local" disabled name="end" id="" className="inputStatus" onChange={(event) => { endDateHandle(event) }} value={taskEndDate} />
          <br />
          <hr />
          <p><label>Description:</label></p>
          <textarea id="descriptiom" disabled name="w3review" rows="4" cols="50" className="inputDescription" onChange={(event) => descriptionHandle(event)} value={taskDescription}>
          </textarea>
        </>
        :
        <>
          <label>Start date : </label>
          <input type="datetime-local" name="start" id="" className="inputStatus" onChange={(event) => { startDateHandle(event) }} value={taskStartDate} />
          <label> End date : </label>
          <input type="datetime-local" name="end" id="" className="inputStatus" onChange={(event) => { endDateHandle(event) }} value={taskEndDate} />
          <br />
          <hr />
          <p><label>Description:</label></p>
          <textarea id="descriptiom" name="w3review" rows="4" cols="50" className="inputDescription" onChange={(event) => descriptionHandle(event)} value={taskDescription}>
          </textarea>
        </>}

    </form>
  </div>;
};
export default TaskWindow;
