import DeleteIcon from "@mui/icons-material/Delete";
import statusSelector from "./statusSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask, setArchived } from "../../rdx/Features/Tasks/Tasks";
import ArchiveIcon from '@mui/icons-material/Archive';

const TaskItem = ({ props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonHandle = () => {
    console.log(props.id);
    navigate(`/tasks/${props.id}`);
  }

  return (
    <div className="TaskItem" onClick={() => { buttonHandle() }}>
      <div>
        {statusSelector(props.status)}
      </div>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
        <button className="DeleteButton" onClick={() => { dispatch(deleteTask({ id: props.id, archived: props.archived })) }}>
          <DeleteIcon />
        </button>
        <button className="ArchiveButton" onClick={() => { dispatch(setArchived({ id: props.id, archived: props.archived })) }}>
          <ArchiveIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
