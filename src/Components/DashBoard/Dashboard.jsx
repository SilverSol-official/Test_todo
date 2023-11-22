import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import TaskWindow from "../TaskWindow/TaskWindow";
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { initiateData } from "../../rdx/Features/Tasks/Tasks";
import { Box } from "@mui/material";
import CreateTaskButton from "../CreateTask/CreateTask";

const DashBoard = () => {

  const dispatch = useDispatch();
  const width = window.screen.width;
  const navigate = useNavigate();
  useEffect(() => {
    if (width < 770) {
      navigate('/tasksm/');
    }
  }, [width, navigate])
  useEffect(() => {
    dispatch(initiateData());
  }, [dispatch])



  return (

    <div className="dashboard">
      <Header />
      <div className="MainBody">
        <Box>

          <TaskList />
        </Box>

        <Outlet />
      </div>
    </div>

  );
};

export default DashBoard;
