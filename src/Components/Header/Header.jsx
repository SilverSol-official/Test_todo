import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Header = () => {

  const tasks = useSelector((state) => state.apiTasks.taskData);
  // takes task`s id from url param
  let { id } = useParams();
  let task;

  //gets task name by id to show it in header
  if (tasks.find(item => item.id == id)) {
    task = tasks.find(item => item.id == id);
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
