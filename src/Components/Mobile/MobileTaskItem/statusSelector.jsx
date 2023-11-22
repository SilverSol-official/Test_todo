import FastForwardIcon from '@mui/icons-material/FastForward';
import DoneIcon from '@mui/icons-material/Done';
import PauseIcon from '@mui/icons-material/Pause';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const statusSelector = (statusText) => {
        switch (statusText) {
            case "In process":
                return ( < FastForwardIcon sx = {
                        {
                            color: "yellow",
                            fontSize:"xx-large",
                            display:"block"
                        }
                    }
                    />)
                    break;
            case "Done":
                    return ( < DoneIcon sx = {
                            {
                                color: "#82FF47",
                                fontSize:"xx-large",
                                display:"block"
                            }
                        }
                        />)
                    break;
            case "Break":
                            return(<PauseIcon sx={{
                                fontSize:"xx-large",
                                display:"block"}}/>)
                        break;
            case "Not started":
                        return (<AccessTimeIcon sx={{
                            color:"#FF2828",
                            fontSize:"xx-large",
                            display:"block"}}/>)
                        break;
                        default:
                        break;
                    }
                }
            
export default statusSelector;