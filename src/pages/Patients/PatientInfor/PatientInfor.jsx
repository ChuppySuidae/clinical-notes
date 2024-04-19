import React from 'react';
import { useNavigate } from "react-router-dom";
import PatientDetail from './PatientDetail/PatientDetail';
import Box from '@mui/material/Box';
import Histories from './Histories/Histories';
import Encounters from '~/pages/Patients/PatientInfor/Encounters/Encounters';

import Button from '@mui/material/Button'
function PatientInfor() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
          <Button sx={{
             height: '50px',
             borderRadius: '20px',
             bgcolor:(theme) => (theme.palette.mode === 'dark' ? 'inherit' : '#1976d2'),
             color:'white'
          }} onClick={handleBack} variant="outlined">Back</Button>
          <PatientDetail/>
          <Encounters/>
          <Histories/>
      </Box>
      
    </>
  );
}

export default PatientInfor;