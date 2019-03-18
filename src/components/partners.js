import React, { Component} from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import classNames from 'classname';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../styles/global.css';
import placeholder1 from './parts.jpg';


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
        maxWidth: 1600,
    },
    media: {
        height: 650,
    }
  });

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
        <div className={classNames('fillParent', classes.container, classes.root)}>
            <Grid container spacing={36}>
              <Grid item xs={12}>
              <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={placeholder1}
                    title="Nature"
                    />
              </Card>
              </Grid>
              

              <Grid item xs={12}>

                <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                    Learn how to Become a Partner
                    </Typography>
                    <Typography component="p">
                    Insert Content
                    Insert Content
                    Insert Content
                    Insert Content
                    Insert Content
                    Insert Content
                 </Typography>
                </Paper> 

              </Grid>


            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                “Our highest hiring percentage comes from Roots job site. We always get the highest volume of qualified applications for our positions with Roots” - ArchitectWorks  
                    </Typography>
                </Paper> 
            </Grid>

            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                “We’re proud to be associated with Roots for over seven years! Roots mission aligns to our own and has led us to hire individuals around the world.“ - General Hospitals 
                    </Typography>
                </Paper> 
            </Grid>

            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                “Roots has helped us find intelligent remote talent that drives success within our business!" - AfricaHopes Inc. 
                    </Typography>
                </Paper> 
            </Grid>            

            
            <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
                Partner with Roots to utilize our Network 
                </Typography>
                <Typography component="p">
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
                Submit a Job Now
            </Button>
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