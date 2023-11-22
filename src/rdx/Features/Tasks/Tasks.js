import {
  createSlice
} from "@reduxjs/toolkit";
import {
  v4 as uuidv4
} from 'uuid';

const initialState = {
  currentId: "1",
  tasks: [
    //   {
    //     title: "Task 1",
    //     id: '1',
    //     description: "bla bla bla",
    //     status: "Done",
    //     startDate: "N/D",
    //     dateEnd: "N/D",
    // }, {
    //     title: "Task 2",
    //     id: '2',
    //     description: "bla bla bla",
    //     status: "In process",
    //     startDate: "N/D",
    //     dateEnd: "N/D",
    // }, {
    //     title: "Task 3",
    //     id: '3',
    //     description: "bla bla bla",
    //     status: "Break",
    //     startDate: "N/D",
    //     dateEnd: "N/D",
    // }, {
    //     title: "Task 4",
    //     id: '4',
    //     description: "bla bla bla",
    //     status: "Not started",
    //     startDate: "N/D",
    //     dateEnd: "N/D",
    // }, 
  ],
  archive: [

  ]
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state) => {
      const tempId = uuidv4();
      state.tasks.unshift({
        title: '',
        id: tempId,
        description: '',
        status: 'Not started',
        startDate: '',
        dateEnd: '',
        archived: false,
      });
      state.currentId = tempId;
      localStorage.tasks = JSON.stringify(state.tasks);
    },
    setTitle: (state, action) => {
      console.log(action.payload);
      state.tasks[state.tasks.findIndex(item => item.id === state.currentId)].title = action.payload.name;
      localStorage.tasks = JSON.stringify(state.tasks);
    },
    setDescription: (state, action) => {
      state.tasks[state.tasks.findIndex(item => item.id === state.currentId)].description = action.payload.description;
      localStorage.tasks = JSON.stringify(state.tasks);
    },
    setStatus: (state, action) => {
      state.tasks[state.tasks.findIndex(item => item.id === state.currentId)].status = action.payload.status;
      localStorage.tasks = JSON.stringify(state.tasks);
    },
    setStartDate: (state, action) => {
      state.tasks[state.tasks.findIndex(item => item.id === state.currentId)].startDate = action.payload.startDate;
      localStorage.tasks = JSON.stringify(state.tasks);
    },
    setDeadLine: (state, action) => {
      state.tasks[state.tasks.findIndex(item => item.id === state.currentId)].dateEnd = action.payload.deadLine;
      localStorage.tasks = JSON.stringify(state.tasks);
    },
    setCurrentId: (state, action) => {
      state.currentId = action.payload.id;
      console.log(state);
      // localStorage.tasks = JSON.stringify(state.tasks);
    },
    setArchived: (state, action) => {
      // state.tasks[state.tasks.findIndex(item => item.id === state.currentId)].archived = action.payload.archived;
      // localStorage.tasks = JSON.stringify(state.tasks);

      if (!action.payload.archived) {
        const n = state.tasks.findIndex(item => item.id === action.payload.id);
        state.tasks[n].archived = true;
        state.archive.unshift(state.tasks[n]);
        state.tasks = [...state.tasks.slice(0, n), ...state.tasks.slice(n + 1)];

      } else {
        const n = state.archive.findIndex(item => item.id === action.payload.id);
        state.archive[n].archived = false;
        state.tasks.unshift(state.archive[n]);
        state.archive = [...state.archive.slice(0, n), ...state.archive.slice(n + 1)];
      }
      state.currentId = '';
      localStorage.tasks = JSON.stringify(state.tasks);
      localStorage.archive = JSON.stringify(state.archive);
    },

    deleteTask: (state, action) => {
      console.log(action.payload);
      if (action.payload.archived) {
        const n = state.archive.findIndex(item => item.id === action.payload.id);
        state.archive = [...state.archive.slice(0, n), ...state.archive.slice(n + 1)];
        state.currentId = '';
        localStorage.archive = JSON.stringify(state.archive);
      } else {
        const n = state.tasks.findIndex(item => item.id === action.payload.id);
        state.tasks = [...state.tasks.slice(0, n), ...state.tasks.slice(n + 1)];
        state.currentId = '';
        localStorage.tasks = JSON.stringify(state.tasks);
      }
      //indexOf((item)=>item.id==action.payload.id);


    },
    initiateData: (state) => {
      if (localStorage.tasks === undefined && localStorage.archive === undefined) {
        localStorage.setItem('archive', '[]');
        localStorage.setItem('tasks', '[]');
      } else if (localStorage.archive === undefined) {
        localStorage.setItem('archive', '[]');
      } else if (localStorage.tasks === undefined) {
        localStorage.setItem('tasks', '[]');
      }
      state.tasks = JSON.parse(localStorage.tasks);
      state.archive = JSON.parse(localStorage.archive);
      // } else {
      //   console.log(JSON.parse(localStorage.tasks));

      // }
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  createTask,
  setTitle,
  setDescription,
  setStatus,
  setStartDate,
  setDeadLine,
  setCurrentId,
  deleteTask,
  initiateData,
  setArchived,
} = taskSlice.actions

export default taskSlice.reducer