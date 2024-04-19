import AppBar from '~/components/AppBar/AppBar';
import { Outlet } from "react-router-dom";
import ListPatients from './ListPatients';
import SlideBar from '../Patients/SlideBar';
import Box from '@mui/material/Box';
function Patients() {
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

export default Patients;