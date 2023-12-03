import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const DropDownStyles = {
    background: 'white',
    margin: '20px auto',
    padding: '10px 20px',
    borderRadius: '10px',
    width: '52%',
    fontSize: 'large',
    minWidth: '140',
}


// used for sort dropdown component
const SortDropDown = ({ changeSortMethod }) => {
    const [selectedMethod, setSelectedMethod] = useState('All');
    // hendle user`s select
    const SelectHandler = (e) => {
        setSelectedMethod(e.target.value);
        changeSortMethod(e.target.value);
    }
    return (
        <Box sx={DropDownStyles}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Show:
                </InputLabel>
                <NativeSelect
                    value={selectedMethod}
                    inputProps={{
                        name: 'Status',
                        id: 'uncontrolled-native',
                    }}
                    onChange={e => SelectHandler(e)}
                >
                    <option value={'All'}>All</option>
                    <option value={true}>Done</option>
                    <option value={false}>Not started</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}

export default SortDropDown;