import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import User from "./components/User";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="user" element={<User />}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="details" element={<Details/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
