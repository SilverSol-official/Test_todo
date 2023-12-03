import React, { useState } from "react";
import CreateTaskButton from "../../CreateTask/CreateTask";
import { useSelector } from "react-redux";
import SortDropDown from "../../SordDropDown/SortDropDown";
import MobileTaskItem from "../MobileTaskItem/MobiletaskItem";


const MobileTaskList = () => {

  const tasks = useSelector((state) => state.apiTasks.taskData);
  const status = useSelector((state) => state.apiTasks.taskStatus);
  const [sort, setSort] = useState('All');
  const [page, setPage] = useState(1);
  const tasksPerPage = 4;



  const render = () => {
    if (status === 'loading') {
      return (<h2>Loading ...</h2>)
    } else {
      if (tasks.length === 0) {
        return (<h3>No tasks</h3>)
      } else {
        return (tasks.map((item, index) => {
          if ((item.completed + '' == sort + '') && ((index < page * tasksPerPage) && (index + 1 > (page - 1) * tasksPerPage))) { return <MobileTaskItem key={item.id} props={item} /> }
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
    <div className="TaskListM">
      {/* <>User: {user}</> */}
      <CreateTaskButton />
      <SortDropDown changeSortMethod={setSort} />
      Number of pages: {Math.ceil(tasks.length / tasksPerPage)}
      <div className="pageButtonContainer">
        {ButtonGenerate()}
      </div>
      {render()}

    </div>
  );
};

export default MobileTaskList;
