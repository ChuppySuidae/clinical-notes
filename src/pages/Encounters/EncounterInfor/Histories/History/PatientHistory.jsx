import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
function PatientHistory() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          History 1
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ p: 1.5, '&:last-child': { p: 1.5 }, overflow:'unset' }}>

            <FormGroup>
              <TextField
                disabled
                id="standard-disabled"
                label="History Id"
                defaultValue="12"
                variant="standard"
                margin="dense"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                disabled
                id="standard-disabled"
                label="History Illness"
                defaultValue="12"
                variant="standard"
                margin="dense"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                disabled
                id="standard-disabled"
                label="Medical History"
                defaultValue="12"
                variant="standard"
                margin="dense"
              />
            </FormGroup>

          </Box>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default PatientHistory;