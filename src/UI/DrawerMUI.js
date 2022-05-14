import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

function DrawerMUI () {

  const [open, setOpen ] = useState(false);

  const handleOpen = () => { 
    setOpen(true); 
  }

  const handleClose = () => { 
    setOpen(false); 
  }

  return (
    <Box >
      <IconButton onClick={ handleOpen }  ><MenuIcon /></IconButton>
      <Drawer anchor='right' open={ open } onClick={ handleClose }>
          <List>
            <ListItem button component={ Link } to='/'>
              <ListItemText primary='Kyselyt' />
            </ListItem>
            <ListItem button component={ Link } to='/raportit'>
              <ListItemText primary='Raportit' />
            </ListItem>
          </List>
      </Drawer>
    </Box>
  );
}

export default DrawerMUI;