import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import CardContent from '@mui/material/CardContent';
import CreatePatient from './CreatePatient/CreatePatient';
import UploadEncounterInfor from './UploadEncounterInfor/UploadEncounterInfor';
function CreateEncounter() {
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
        <CreatePatient/>
        <UploadEncounterInfor/>
      </Box>
    </>
  );
}

export default CreateEncounter;