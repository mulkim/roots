import React, { Component} from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import classNames from 'classname';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import '../styles/global.css';
import placeholder from './Nature.jpg';

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
    card: {
        height: 350,
    },
    media: {
        height: 350,
    }
  });

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
        <div className={classNames('fillParent', classes.container, classes.root)}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
              <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={placeholder}
                    title="Nature"
                />
              </Card>
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

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Home);