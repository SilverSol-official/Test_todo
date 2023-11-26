import React, { useState } from "react";
import CreateTaskButton from "../../CreateTask/CreateTask";
import { useSelector } from "react-redux";
import SortDropDown from "../../SordDropDown/SortDropDown";
import Switch from '@mui/material/Switch';
import { Box, Typography } from "@mui/material";
import MobileTaskItem from "../MobileTaskItem/MobiletaskItem";
import LogoutButton from "../../TaskList/LogOutButton";

const MobileTaskList = () => {

  const tasks = useSelector((state) => state.tasks.tasks);
  const archive = useSelector((state) => state.tasks.archive);
  const user = useSelector((state) => state.tasks.userName);
  const [sort, setSort] = useState('All');
  const [archived, setArchived] = useState(false);

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
        return (tasks.map((item) => {
          if (sort == 'All' || item.status == sort) { return <MobileTaskItem key={item.id} props={item} /> }
        }))
      }
    }

  }

  return (
    <div className="TaskListM">
      <>User: {user}</>
      <CreateTaskButton />
      <Typography variant="h6" sx={{ margin: '10px auto' }}>Main list <Switch color="default" checked={archived} onChange={(e) => setArchived(e.target.checked)} /> Archive</Typography>
      <SortDropDown changeSortMethod={setSort} />
      {render()}
      <LogoutButton />
    </div>
  );
};

export default MobileTaskList;
