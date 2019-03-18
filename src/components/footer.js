import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Typography } from "@material-ui/core";
import { grey300 } from 'material-ui/styles/colors';


const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: grey300,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
});


function Footer(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
        <Grid container spacing={40}>
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-end"
            >
          <Grid item xs={8} sm={4} md={2} >
            <Typography variant="h6" marked="left" gutterBottom>
                Site Map
            </Typography>
            <ul className={classes.list}>
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            >
            <Grid item xs={8/3} > 
              <li className={classes.listItem}>
                <Link href='/'>Home</Link>
              </li>
              <li className={classes.listItem}>
                <Link href='/about'>About</Link>
              </li>
              </Grid>
              <Grid item xs={8/3}>
              <li className={classes.listItem}>
                <Link href='/jobs'>Jobs</Link>
              </li>
              <li className={classes.listItem}>
                <Link href='/partners'>Partners</Link>
              </li>
              </Grid>
              <Grid item xs={8/3}>
              <li className={classes.listItem}>
                <Link href='/learn'>Learn</Link>
              </li>
              </Grid>
              </Grid>
            </ul>
          </Grid>
          <Grid item xs={8} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Stay Connected
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                Instagram: @ProjectRoots
              </li>
              <li className={classes.listItem}>
                Twitter: @ProjectRoots
              </li>
            </ul>
          </Grid>
          <Grid item xs={8} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Contact us
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                1851 NE Grant Ln
              </li>
              <li className={classes.listItem}>
                Seattle, WA 98195
              </li>
            </ul>
          </Grid>
          </Grid>
          <Grid item xs={12} /*sm={4} md={2}*/>
              <Grid item> © 2019 ROOTS. All Rights Reserved. </Grid>
          </Grid>
        </Grid>
    </Typography>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  pure,
  withStyles(styles),
)(Footer);