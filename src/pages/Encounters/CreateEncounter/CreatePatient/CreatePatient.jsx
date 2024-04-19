
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import FormGroup from '@mui/material/FormGroup';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
function CreatePatient() {
  return (
    <>
    <Card sx={{
      width: '48%'
    }}>
    <CardHeader title="Patient Information"/>
    <CardContent>
      <FormGroup>
      <TextField
       id="standard-"
       label="ID Patient"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
      <FormGroup>
      <TextField
       
       id="standard-"
       label="Full Name"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
      <FormGroup>
      <TextField
       
       id="standard-"
       label="Age"
       defaultValue="12"
       variant="standard"
       margin="dense"
      />
      </FormGroup>
      <FormGroup>
         
      <TextField
       
       id="standard-"
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

export default CreatePatient;