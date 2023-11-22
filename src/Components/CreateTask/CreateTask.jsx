import { useDispatch } from "react-redux";
import { createTask } from "../../rdx/Features/Tasks/Tasks";

const CreateTaskButton = () => {
  const dispatch = useDispatch();
  return <button className="CreateTaskButton" onClick={()=>{dispatch(createTask())}}>Create Task</button>;
};

export default CreateTaskButton;
