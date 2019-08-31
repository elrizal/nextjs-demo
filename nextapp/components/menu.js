import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'

export default function MenuBtn() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <MenuIcon
      aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
          </MenuIcon>
    
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link href='/'><a>Home</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/about'><a>About</a></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/postlist'><a>Posts</a></Link></MenuItem>

        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}