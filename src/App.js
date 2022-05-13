import Nav from "./componand/Nav";
import Text from "./componand/Text";
import "../src/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./componand/ProtectedRoutes";


const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Text></Text>} /> 


        <Route element = {<ProtectedRoutes/>}>
          <Route path="/profile" element={<h1>put profile componand here</h1>} />  
          <Route path="/bookings" element={<h1>put bookings componand here</h1>} />  
        </Route>


        <Route path="*" element={<h1>Page Not Found</h1>}/> 
      </Routes>
     
    </div>
  );
};

export default App;
