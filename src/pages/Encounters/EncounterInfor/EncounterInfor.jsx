import { Box } from '@mui/material';
import PatientInfor from './PatientInfor/PatientInfor';
import EnInfor from './EnInfor/EnInfor';
import PatientHistories from './Histories/PatientHistories';
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";
function EncounterInfor() {
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
          <PatientInfor />
          <EnInfor />
          <PatientHistories/>
      
      </Box>
    </>
  );
}

export default EncounterInfor;