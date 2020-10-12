

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../joonko logo.svg'
import facebooklogo from '../Group 7128.svg'
import linkdinlogo from '../Group 7129.svg'
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container direction="row"
                          justify="space-between">
                        <Grid item>
<img src={logo} alt={"joonko logo"}/>
                        </Grid>
                        <Grid item >
                    <img src={facebooklogo} alt={"facebook logo"}/>
                    <img src={linkdinlogo} alt={"linkdin logo"}/>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}