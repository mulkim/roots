import React, { Component} from "react";
import { withStyles, Typography } from "@material-ui/core";
import classNames from 'classname';

import '../styles/global.css';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

class Home extends Component {
    render() {
    return (
        <div>
            <p>Home</p>
        </div>
    );
    }
}

export default withStyles(styles)(Home);