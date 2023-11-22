import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const tasks = useSelector((state) => state.tasks);
  const archive = useSelector((state) => state.tasks);
  let task;
  if (tasks.tasks.find(item => item.id === tasks.currentId)) {
    task = tasks.tasks.find(item => item.id === tasks.currentId);
  } else {
    task = tasks.archive.find(item => item.id === tasks.currentId);
  }
  const checkTitle = () => {
    if (task === undefined) {
      return ('')
    } else {
      console.log(task.title)
      return (task.title)
    }
  }


  return (
    <div className="header">
      <div className="appHeader">
        <h1>Silver task</h1>
      </div>
      <div className="taskTitle">
        <h3>{task === undefined ? '' : task.title}</h3>
      </div>
    </div>
  );
};

export default Header;
