import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import Breakfasts from "./Pages/Breakfasts/Breakfasts";
import Lunchs from "./Pages/Lunchs/Lunchs";
import Dinners from "./Pages/Dinners/Dinners";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Breakfasts" element={<Breakfasts></Breakfasts>}></Route>
        <Route path="/Lunchs" element={<Lunchs></Lunchs>}></Route>
        <Route path="/Dinners" element={<Dinners></Dinners>}></Route>
      </Routes>
    </div>
  );
}

export default App;
