 import React from 'react'
 import pic from "../pic.jpg";
 import Typography from '@material-ui/core/Typography';
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
 import logo from '../joonko logo.svg';
 import Button from '@material-ui/core/Button';
 import {Grid} from "@material-ui/core";
 import Menu from '@material-ui/core/Menu';
 import MenuItem from '@material-ui/core/MenuItem';
 import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



 export default function Footer() {
     const [anchorEl, setAnchorEl] = React.useState(null);

     const handleClick = (event) => {
         setAnchorEl(event.currentTarget);
     };

     const handleClose = () => {
         setAnchorEl(null);
     };

     return (
         <div>
             <AppBar position="static" style={{background:"#FFFFFF"}}>
                 <Toolbar>
                     <Grid container justify="space-between">
                         <Grid item>
                             <img src={logo} alt={"joonko logo"}/>
                         </Grid>
                         <Grid item>
                             <Button style={{fontFamily:"Muli",fontWeight:"bold",fontSize:"18px",characterSpacing:"0px",lineSpacing:"23px"}}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                 Open Menu
                                 <ArrowDownwardIcon/>
                             </Button>
                             <Menu
                                 id="simple-menu"
                                 anchorEl={anchorEl}
                                 keepMounted
                                 open={Boolean(anchorEl)}
                                 onClose={handleClose}
                             >
                                 <MenuItem onClick={handleClose}>Text 1</MenuItem>
                                 <MenuItem onClick={handleClose}>Text 2</MenuItem>
                                 <MenuItem onClick={handleClose}>Logout</MenuItem>
                             </Menu>
                             <Button style={{color:"#010A60",fontFamily:"Muli",fontWeight:"bold",fontSize:"18px",characterSpacing:"0px",lineSpacing:"23px"}} >Resources</Button>
                             <Button style={{color:"#010A60",fontFamily:"Muli",fontWeight:"bold",fontSize:"18px",characterSpacing:"0px",lineSpacing:"23px"}}>Blog</Button>
                             <Button style={{color:"#010A60",fontFamily:"Muli",fontWeight:"bold",fontSize:"18px",characterSpacing:"0px",lineSpacing:"23px"}}>About us</Button>
                             <Button style={{color:"#010A60",fontFamily:"Muli",fontWeight:"bold",fontSize:"18px",characterSpacing:"0px",lineSpacing:"23px"}}>Sign in</Button>
                             <Button style={{color:"#010A60",background:"#7B3FF2",borderRadius:"50px",fontFamily:"Muli",fontWeight:"bold",fontSize:"18px",characterSpacing:"0px",lineSpacing:"23px"}}>Get Started</Button>
                         </Grid>
                     </Grid>
                 </Toolbar>
             </AppBar>
             <img style={{maxWidth:"100%"}} src={pic}  alt="logo"/>
             <Grid container   justify="center"
                   alignItems="center">
                 <Grid item>
             <Typography style={{color:"#010A60",font:"30px",fontFamily:"Muli"}} variant="h3" gutterBottom>
                 A little bit about us and why we care about diversity
             </Typography>
                 </Grid>
                 <Grid item>
             <Typography style={{color:"#010A60",textAlign:"left"}}>
                 At PayPal, our mission is to ignite opportunity by setting the world in motion. We see direct parallels between how we ignite opportunity through our company and how we ignite it within our company. But we also know that a solely data-driven approach will never be sufficient, because D&I is more than a box to check or a target to hit. The numbers matter, but they’re only a starting point; acommitment to diversity and inclusion has to run much deeper. That’s why we’ve set an audacious goal: to make Uber the most diverse, equitable, and inclusive workplace on the planet. And we’re not just setting high expectations for our own good. We’re aiming sky-high because we know from experience that reducing and eliminating inequity is hard to do if all you shoot for is incremental change.
             </Typography>
                 </Grid>
             </Grid>
         </div>
     );
 }


