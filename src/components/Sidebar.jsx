import { Home, Pages, Group, Store, People, Settings, AccountCircle, ModeNight } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'
import { useState } from 'react';

const items = [
  { text: 'Home', icon: <Home />, link: '#home' },
  { text: 'Pages', icon: <Pages />, link: '#pages' },
  { text: 'Groups', icon: <Group />, link: '#groups' },
  { text: 'Marketplace', icon: <Store />, link: '#marketplace' },
  { text: 'Friends', icon: <People />, link: '#friends' },
  { text: 'Settings', icon: <Settings />, link: '#settings' },
  { text: 'Profile', icon: <AccountCircle />, link: '#profile' },
];

const Sidebar = () => {
 const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
      <Box
          flex={1}
          p={2}
          sx={{ display: { xs: "none", sm: "block" } }}
      >
          <Box position="fixed">
              <List>
      {items.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton component="a" href={item.link}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
        <ListItem enablePadding>
        <ListItemIcon>
          <ModeNight />
        </ListItemIcon>
        <ListItemText  />
        <Switch
          checked={darkMode}
          onChange={handleDarkModeChange}
          
        />
      </ListItem>
    </List>
           </Box>
      </Box>
  )
}

export default Sidebar