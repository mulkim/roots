import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { AppBar, withStyles, Tab, Tabs, NoSsr } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import { EditorBorderRight } from 'material-ui/svg-icons';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  name: {
    textAlign: 'left',
  },
  menubar: {
    marginLeft: 150,
    marginRight: 0,
    position: 'relative',
  }
});

class RootsToolbar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Tabs variant="standard" value={value} onChange={this.handleChange}>
            <div className={classes.name}>
              <Typography 
                  variant="h4"
                  color="inherit">
                ROOTS
              </Typography>
            </div>
            <div className={classes.menubar}>
              <Tab label="Home"
                    component={Link} 
                    to='/'/>
              <Tab label="About"
                    component={Link}  
                    to='/about'/>
              <Tab label="Jobs" 
                    component={Link}  
                    to="/jobs" />
              <Tab label="Partners"
                    component={Link}  
                    to="/partners" />
              <Tab label="Learn" 
                    component={Link}  
                    to="learn" />
              <Tab label="Contact"
                    component={Link}  
                    to="/contact" />
            </div>
          </Tabs>
        </AppBar>
      </div>
      </NoSsr>
    );
  }
}

RootsToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RootsToolbar);
