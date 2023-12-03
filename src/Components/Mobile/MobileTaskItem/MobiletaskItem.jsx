import DeleteIcon from "@mui/icons-material/Delete";
import statusSelector from "./statusSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask, setArchived } from "../../../rdx/Features/Tasks/Tasks";
import ArchiveIcon from '@mui/icons-material/Archive';

const MobileTaskItem = ({ props }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const buttonHandle = () => {
        console.log(props.id);
        navigate(`/tasksm/${props.id}`);
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

export default MobileTaskItem;
