import React from 'react';
import './navbar'
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuBtn from '../menu';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function NavBar() {
//   const classes = useStyles();
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   function handleChange(event) {
//     setAuth(event.target.checked);
//   }

//   function handleMenu(event) {
//     setAnchorEl(event.currentTarget);
//   }

//   function handleClose() {
//     setAnchorEl(null);
//   }

//   return (
//     <div className={classes.root}>
  
//       <AppBar position="static">
//         <Toolbar>

//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuBtn />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Photos
//           </Typography>
//           <FormGroup>
//                 <FormControlLabel
//                   control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
//                   label={auth ? 'Logout' : 'Login'}
//                 />
//               </FormGroup>
//           {auth && (
//             <div>
//               <IconButton
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>

//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={open}
//                 onClose={handleClose}
//               >
//                     <FormGroup>
//                 <FormControlLabel
//                   control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
//                   label={auth ? 'Logout' : 'Login'}
//                 />
//               </FormGroup>
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
                
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

import { slide as Menu } from 'react-burger-menu'

class NavBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
export default NavBar