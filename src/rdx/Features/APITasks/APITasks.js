import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    v4 as uuidv4
} from "uuid";


//async thunk which gets tasks from json server
export const fetchAllTasks = createAsyncThunk(
    'apiTasks/fetchAllTasks',
    async () => {
        const url = `https://jsonplaceholder.typicode.com/todos`;
        try {
            const responce = await fetch(url);
            const data = await responce.json();
            return data;
        } catch (error) {
            throw new Error('error');
        }
    }
);

//function that handle error and take data from local storage if any problems with server
const setError = (state, action) => {
    state.taskStatus = 'rejected';
    state.taskError = action.payload;
    if (localStorage.tasks === undefined) {
        localStorage.setItem('tasks', '[]');
    }
    state.taskData = JSON.parse(localStorage.tasks);
    alert(' Warning! No connection to server, tasks were taken from localStorage ');
}

const initialState = {
    taskData: [], //to storage tasks
    taskStatus: 'loading', // to get status of async thunk
    taskError: null, // to get info about errors
}

export const apiTaskSlice = createSlice({
    name: 'apiTasks',
    initialState,
    reducers: {
        createTask: (state) => { //action that create task
            const tempId = uuidv4();
            state.taskData.unshift({
                title: '',
                id: tempId,
                completed: false,
            });

            localStorage.taskData = JSON.stringify(state.taskData); //storaging to local storage
        },
        setTitle: (state, action) => { //editing of task
            console.log(action.payload);
            state.taskData[state.taskData.findIndex(item => item.id == action.payload.id)].title = action.payload.name;
            localStorage.tasks = JSON.stringify(state.taskData);
        },
        setStatus: (state, action) => { //editing of task
            console.log(action.payload.completed);
            state.taskData[state.taskData.findIndex(item => item.id == action.payload.id)].completed = action.payload.completed;
            localStorage.tasks = JSON.stringify(state.taskData);
        },
        deleteTask: (state, action) => { //deleting of certain task from front and save it into local storage
            console.log(action.payload);
            const n = state.taskData.findIndex(item => item.id == action.payload.id);
            state.taskData = [...state.taskData.slice(0, n), ...state.taskData.slice(n + 1)];
            localStorage.tasks = JSON.stringify(state.taskData);
        },

    },
    extraReducers: { // some reducers to handle async action
        [fetchAllTasks.pending]: (state) => {
            state.taskStatus = 'loading';
            state.taskError = null;
            console.log('pending');
        },
        [fetchAllTasks.fulfilled]: (state, action) => {
            state.taskStatus = 'resolved';
            state.taskData = action.payload;
            console.log('fulfilled')
        },
        [fetchAllTasks.rejected]: setError,
    }
})

// Action creators are generated for each case reducer function
export const {
    createTask,
    setTitle,
    setStatus,
    deleteTask,
} = apiTaskSlice.actions

export default apiTaskSlice.reducer