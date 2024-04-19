import AppBar from '~/components/AppBar/AppBar';
import { Outlet } from "react-router-dom";
import SlideBar from '../Encounters/SlideBar';
import Box from '@mui/material/Box';
function Encounters() {
  return (
    <>
      <AppBar />
      <Box sx={{ display: 'flex' }}>
        <SlideBar />
          <Outlet/>
      </Box>
    </>
  );
}

export default Encounters;