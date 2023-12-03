import "./App.css";
import DashBoard from "./Components/DashBoard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskWindow from "./Components/TaskWindow/TaskWindow";
import MobileDashBoard from "./Components/Mobile/MobileDashboard/MobileDashboard";
import Dashboard from '../src/Components/DashBoard/Dashboard';
import MobileTaskWindow from "./Components/Mobile/MobileTaskWindow/MobileTaskWindow";

function App() {
  // includes routing and showing mobile or pc version and showing taskWindow conponent due to url params (if id param in url)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path='/tasks/' element={<Dashboard />}>
            <Route path='/tasks/:id' element={<TaskWindow />} />
          </Route>
          <Route path="/tasksm/" element={<MobileDashBoard />} />
          <Route path='/tasksm/:id' element={<MobileTaskWindow />} />
        </Routes>

        {/* <DashBoard /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
