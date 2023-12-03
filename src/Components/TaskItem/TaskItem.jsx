import DeleteIcon from "@mui/icons-material/Delete";
import statusSelector from "./statusSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask } from "../../rdx/Features/APITasks/APITasks";
import ArchiveIcon from '@mui/icons-material/Archive';

const TaskItem = ({ props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //hadle click on task to set id to url prop and redirect
  const buttonHandle = () => {
    navigate(`/tasks/${props.id}`);
  }

  return (
    <div className="TaskItem" onClick={() => { buttonHandle() }}>
      <div>
        {statusSelector(props.completed)}
      </div>
      <div>
        <p className="taskLabel">{props.title}</p>
      </div>
      <div>
        <button className="DeleteButton" onClick={() => { dispatch(deleteTask({ id: props.id })) }}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
