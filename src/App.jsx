import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Template from "./pages/Template";


function App() {
  
  return (
    <>
   
 <Routes>
      <Route path="/" element={<Template />} />
    </Routes>

    </>
   
  );
}
export default App;
