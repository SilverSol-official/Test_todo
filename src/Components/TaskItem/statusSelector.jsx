import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// gets status of task and returns apropriate icon for it
const statusSelector = (statusText) => {
    switch (statusText + "") {

        case 'true':
            return (< DoneIcon sx={
                {
                    color: "#82FF47",
                    fontSize: "xx-large",
                    display: "block"
                }
            }
            />)
            break;
        case 'false':
            return (<AccessTimeIcon sx={{
                color: "#FF2828",
                fontSize: "xx-large",
                display: "block"
            }} />)
            break;
        default:
            break;
    }
}

export default statusSelector;