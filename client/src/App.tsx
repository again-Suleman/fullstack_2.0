import { Outlet } from "react-router-dom";
import "./App.css";

// We keep the Layout part for Navbars and stuff like that
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
