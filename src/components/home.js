import React, { Component} from "react";
import { withStyles, Typography } from "@material-ui/core";
import classNames from 'classname';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import '../styles/global.css';


const styles = theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  });

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
        <div className={classNames('fillParent', classes.container, classes.root)}>
            <Typography 
                variant="h6"
                color="inherit">
            Home
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                mulki=12
                <img className={classes.img} alt="nature" src="nature.jpg" />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>xs=4</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>xs=4</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>xs=4</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
            </Grid>
          </div>
        );
    }
}

export default withStyles(styles)(Home);