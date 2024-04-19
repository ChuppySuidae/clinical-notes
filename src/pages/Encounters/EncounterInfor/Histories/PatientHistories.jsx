import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import PatientHistory from './History/PatientHistory';
function PatientHistories() {
  return (
    <>
    <Card sx={{
      width: '30%',p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
      ${theme.trello.boardContentHeight} - 
      ${theme.spacing(5)}
      )`,
      minHeight: (theme) => `calc(
        ${theme.trello.boardContentHeight} - 
        ${theme.spacing(5)}
        )`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da',
        borderRadius: '8px'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf',
        borderRadius: '8px'
      }
    }}>
    <CardHeader title="History Information"/>
    <CardContent>
      <PatientHistory/>
      <PatientHistory/>
      <PatientHistory/>
    </CardContent>
    </Card>
    </>
  );
}

export default PatientHistories;