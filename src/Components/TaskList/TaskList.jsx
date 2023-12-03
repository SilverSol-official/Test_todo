import React, { useEffect, useState } from "react";
import CreateTaskButton from "../CreateTask/CreateTask";
import TaskItem from "../TaskItem/TaskItem";
import testList from "../../testData";
import { useDispatch, useSelector } from "react-redux";
import SortDropDown from "../SordDropDown/SortDropDown";
import Switch from '@mui/material/Switch';
import { Box, Button, Typography } from "@mui/material";
import { fetchAllTasks } from "../../rdx/Features/APITasks/APITasks";



const TaskList = () => {

  const tasks = useSelector((state) => state.apiTasks.taskData);
  const status = useSelector((state) => state.apiTasks.taskStatus);
  const [sort, setSort] = useState('All');
  const [page, setPage] = useState(1);
  const tasksPerPage = 5; // put here number of tasks on one page 

  // render function shows list of tasks acording to selcted page
  const render = () => {
    //check of status to write if loading
    if (status === 'loading') {
      return (<h2>Loading ...</h2>)
    } else {
      if (tasks.length === 0) {
        return (<h3>No tasks</h3>)
      } else {
        return (tasks.map((item, index) => {
          if ((sort == 'All' || item.status == sort) && ((index < page * tasksPerPage) && (index + 1 > (page - 1) * tasksPerPage))) { return <TaskItem key={item.id} props={item} /> }
        }))
      }
    }


  }


  // generates and calculate number of pages and buttons for them
  const ButtonGenerate = () => {
    let res = [];
    let numberOfPages = Math.ceil(tasks.length / tasksPerPage);
    // returns the number of firts page in stack on screen (1,6,11..) used to not to show 0 
    const lastPage = () => {
      if (((Math.floor((page) / 5) * 5) + 5) >= numberOfPages) {
        return numberOfPages;
      } else {
        return (Math.floor((page) / 5) * 5) + 5;
      }
    }
    //returns  the number of firts page in stack on screen to have on screen only actual amount of pages
    const firstPage = () => {
      if (((Math.floor((page) / 5) * 5) - 1) === -1) {
        return (0);
      } else {
        return ((Math.floor((page) / 5) * 5) - 1);
      }
    }

    //gernerationg of buttons
    for (let i = firstPage(); i < (lastPage()); i++) {
      res.push(
        <button className={(page === i + 1) ? 'pageButton selectedPage' : 'pageButton'} key={i} onClick={() => { setPage(i + 1) }}>
          {i + 1}
        </button>)
    }
    res.unshift(
      <button className='pageButton ' key={'pr'} onClick={() => { page === 1 ? setPage(1) : setPage(page - 1) }}>
        &lt;
      </button>)
    res.push(
      <button className='pageButton ' key={'fv'} onClick={() => { page === numberOfPages ? setPage(page) : setPage(page + 1) }}>
        &gt;
      </button>)

    return (res);
  }

  return (
    <div className="container">

      <div className="TaskList">
        <CreateTaskButton />
        <SortDropDown changeSortMethod={setSort} />
        Number of pages: {Math.ceil(tasks.length / tasksPerPage)}
        <div className="pageButtonContainer">
          {ButtonGenerate()}
        </div>
        {render()}
      </div>
    </div>
  );
};

export default TaskList;
