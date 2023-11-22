import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const MobileHeader = () => {
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
        <div className="headerM">
            <h1>Silver task</h1>
        </div>
    );
};

export default MobileHeader;
