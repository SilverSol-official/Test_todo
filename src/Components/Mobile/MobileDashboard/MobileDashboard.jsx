import { useDispatch, useSelector } from "react-redux";
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
    const status = useSelector((state) => state.apiTasks.taskStatus);
    useEffect(() => {
        if (width > 770) {
            navigate('/tasks/');
        }
    }, [width, navigate])

    useEffect(() => {
        if (status == 'loading') {
            dispatch(fetchAllTasks());
        }
    }, [dispatch, status])

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