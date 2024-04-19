
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import FormGroup from '@mui/material/FormGroup';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
function PatientInfor() {
  return (
    <>
    <Card sx={{
      width: '25%'
    }}>
    <CardHeader title="Patient Information"/>
    <CardContent>
      <FormGroup>
      <TextField
       disabled
       id="standard-disabled"
       label="ID Patient"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
      <FormGroup>
      <TextField
       disabled
       id="standard-disabled"
       label="Full Name"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
      <FormGroup>
      <TextField
       disabled
       id="standard-disabled"
       label="Age"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
      <FormGroup>
         
      <TextField
       disabled
       id="standard-disabled"
       label="Gender"
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

export default PatientInfor;