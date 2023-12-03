import { useDispatch } from "react-redux";
import { createTask } from "../../rdx/Features/APITasks/APITasks";
// button for adding new task
const CreateTaskButton = () => {
  const dispatch = useDispatch();
  return <button className="CreateTaskButton" onClick={() => { dispatch(createTask()) }}>Create Task</button>;
};

export default CreateTaskButton;
