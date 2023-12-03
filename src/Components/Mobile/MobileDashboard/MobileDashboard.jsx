import { useDispatch } from "react-redux";
import Header from "../../Header/Header";
import { useEffect } from "react";
import { initiateData } from "../../../rdx/Features/Tasks/Tasks";
import MobileTaskList from "../MobileTaskList/MobileTaskList";
import MobileHeader from "../MobileHeader/MobileHeader";
import { useNavigate } from "react-router-dom";
import { fetchAllTasks } from "../../../rdx/Features/APITasks/APITasks";

const MobileDashBoard = () => {

    const dispatch = useDispatch();

    const width = window.screen.width;
    const navigate = useNavigate();
    useEffect(() => {
        if (width > 770) {
            navigate('/tasks/');
        }
    }, [width, navigate])

    useEffect(() => {
        dispatch(fetchAllTasks());
    }, [dispatch])

    return (
        <div className="dashboard">
            <MobileHeader />
            <div className="MainBodyM">
                <MobileTaskList />
            </div>
        </div>
    );
};

export default MobileDashBoard;