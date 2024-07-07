import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import RegistarPage from "./pages/RegistarPage";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";


const App = () => {
  return (
    <div>
      <AppBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="login" element={<></>} />
          <Route path="register" element={<RegistarPage/>} />
          <Route path="/tasks" element={<TasksPage/>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
    </div>
  );
}
export default App;
