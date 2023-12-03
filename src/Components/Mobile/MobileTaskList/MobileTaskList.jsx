import React, { useState } from "react";
import CreateTaskButton from "../../CreateTask/CreateTask";
import { useSelector } from "react-redux";
import SortDropDown from "../../SordDropDown/SortDropDown";
import Switch from '@mui/material/Switch';
import { Box, Typography } from "@mui/material";
import MobileTaskItem from "../MobileTaskItem/MobiletaskItem";


const MobileTaskList = () => {

  const tasks = useSelector((state) => state.tasks.tasks);
  const archive = useSelector((state) => state.tasks.archive);
  const [sort, setSort] = useState('All');
  const [archived, setArchived] = useState(false);
  const [page, setPage] = useState(1);
  const tasksPerPage = 4;



  const render = () => {
    if (archived) {
      if (archive.length === 0) {
        return (<h3>Archive is empty</h3>)
      } else {
        return (archive.map((item) => {
          if (sort == 'All' || item.status == sort) { return <MobileTaskItem key={item.id} props={item} /> }
        }))
      }
    } else {
      if (tasks.length === 0) {
        return (<h3>No tasks</h3>)
      } else {
        return (tasks.map((item, index) => {
          if ((sort == 'All' || item.status == sort) && ((index < page * tasksPerPage) && (index + 1 > (page - 1) * tasksPerPage))) { return <MobileTaskItem key={item.id} props={item} /> }
        }))
      }
    }

  }


  const ButtonGenerate = () => {
    let res = [];
    let numberOfPages = Math.ceil(tasks.length / tasksPerPage);

    const lastPage = () => {
      if (((Math.floor((page) / 5) * 5) + 5) >= numberOfPages) {
        return numberOfPages;
      } else {
        return (Math.floor((page) / 5) * 5) + 5;
      }
    }

    const firstPage = () => {
      if (((Math.floor((page) / 5) * 5) - 1) === -1) {
        return (0);
      } else {
        return ((Math.floor((page) / 5) * 5) - 1);
      }
    }


    for (let i = firstPage(); i < (lastPage()); i++) {
      res.push(<button className={(page === i + 1) ? 'pageButton selectedPage' : 'pageButton'} key={i} onClick={() => { setPage(i + 1) }}>{i + 1}</button>)
    }
    res.unshift(<button className='pageButton ' onClick={() => { page === 1 ? setPage(1) : setPage(page - 1) }}> &lt; </button>)
    res.push(<button className='pageButton ' onClick={() => { page === numberOfPages ? setPage(page) : setPage(page + 1) }}> &gt; </button>)


    if (numberOfPages > 5) {

    } else {
      for (let i = 0; i < numberOfPages; i++) {
        res.push(<button className={(page === i + 1) ? 'pageButton selectedPage' : 'pageButton'} key={i} onClick={() => { setPage(i + 1) }}>{i + 1}</button>)
      }
    }

    return (res);
  }

  return (
    <div className="TaskListM">
      {/* <>User: {user}</> */}
      <CreateTaskButton />
      <Typography variant="h6" sx={{ margin: '10px auto' }}>Main list <Switch color="default" checked={archived} onChange={(e) => setArchived(e.target.checked)} /> Archive</Typography>
      <SortDropDown changeSortMethod={setSort} />
      {render()}
      <div className="pageButtonContainer">
        {ButtonGenerate()}
      </div>
    </div>
  );
};

export default MobileTaskList;
