import { Route, Routes } from "react-router-dom";
import Footter from "./Components/Footer/Footter";
import Home from "./Components/Home/Home";
import LowerNavBar from "./Components/LowerNavBar/LowerNavBar";
import MiddleContent from "./Components/MiddleContent/MiddleContent";
import MiddleNavBar from "./Components/MiddleNavBar/MiddleNavBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import UpperNavbar from "./Components/UpperNavBar/UpperNavbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OtherHomeComps from "./Components/OtherHomeComps/OtherHomeComps";


function App() {
  return (
    <div className="App">
      <UpperNavbar/>
      <MiddleNavBar/>
      <LowerNavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/chhattisgarh" element={<OtherHomeComps/>}/>
      </Routes>
      <Sidebar/>
      <MiddleContent/>
      <Footter/>
      <ToastContainer/>
    </div>
  );
}

export default App;
