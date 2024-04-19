import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import FormGroup from '@mui/material/FormGroup';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
function EnInfor() {
  return (
    <>
    <Card sx={{
      width: '35%'
    }}>
    <CardHeader title="Encounter Information"/>
    <CardContent>
      <FormGroup>
      <TextField
       disabled
       id="standard-disabled"
       label="Encounter Date"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
      <FormGroup>
      <TextField
       disabled
       id="standard-disabled"
       label="Current Medications"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
      <FormGroup>
      <TextField
       disabled
       id="standard-disabled"
       label="Physical Exam"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
      <FormGroup>
         
      <TextField
       disabled
       id="standard-disabled"
       label="Objective Examinations"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      <TextField
       disabled
       id="standard-disabled"
       label="Objective Results"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      <TextField
       disabled
       id="standard-disabled"
       label="Assessment And Plan"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      <TextField
       disabled
       id="standard-disabled"
       label="Patient Agreement"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
    </CardContent>
    </Card>
    </>
  );
}

export default EnInfor;