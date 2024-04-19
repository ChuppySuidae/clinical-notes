import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import DraftsIcon from '@mui/icons-material/Drafts';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function SlideBar() {
  return (
    <Box sx={{
      minWidth: '240px',
      maxWidth: '240px',
      ml: 0,
      borderRadius: '0px',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight})`,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowY: 'auto',
      borderBottom: '1px solid white',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')

    }}>
       <Box>
       <List>
          <ListItem disablePadding>
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>Patients</Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton variant="contained" href="/patients" >
              <ListItemIcon>
                <PeopleIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Patients"  sx={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton variant="contained" href="/encounters">
              <ListItemIcon>
                <CalendarMonthIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Encounters" sx={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>
        </List>
       </Box>
    </Box>
  );
}

export default SlideBar;