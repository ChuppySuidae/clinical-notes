
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
function Encounter() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Encounter 1
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ p: 1.5, '&:last-child': { p: 1.5 }, overflow: 'unset' }}>
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
          </Box>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default Encounter;