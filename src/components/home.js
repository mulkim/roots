import React, { Component} from "react";
import { withStyles } from "@material-ui/core";
import classNames from 'classname';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridList: {
        width: 500,
        height: 450,
    },
  });

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
        <div className={classNames('fillParent', classes.container, classes.root)}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
              <GridList cellHeight={160} className={classes.gridList} cols={1}>
                {
                    <GridListTile cols={1}>
                        <img src='nature.jpg' alt='nature' />
                    </GridListTile>
                    }
                </GridList>
                <Paper className={classes.paper}>
                image placeholder
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                Learn
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                Connect
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                Apply
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                Featured Career News
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                Footer
                </Paper>
              </Grid>
            </Grid>
          </div>
        );
    }
}

export default withStyles(styles)(Home);