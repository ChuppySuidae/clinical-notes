import React from 'react';
import History from './History/History';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
function Histories() {
  return (
    <>
    <Card sx={{
      width: '100%',
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
      ${theme.trello.boardContentHeight} 
      )`,
      minHeight: (theme) => `calc(
        ${theme.trello.boardContentHeight} 
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
      <History/>
      <History/>
      <History/>
    </CardContent>
    </Card>
    </>
  );
}

export default Histories;