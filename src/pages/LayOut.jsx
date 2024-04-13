
import AppBar from '../components/AppBar/AppBar'
import { Outlet } from "react-router-dom"

function LayOut() {
  return (
    <>
    <AppBar/>
    <Outlet/>
    </>
  );
}

export default LayOut;