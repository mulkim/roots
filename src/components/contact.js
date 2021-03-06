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
import placeholder1 from './teams.png';
import Footer from './footer';
import map from './map.JPG';


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
        height: 425,
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
                    image={map}
                    title="Contact"
                    />
              </Card>
              </Grid>
              

              <Grid item xs={12}>

                <Paper className={classes.paper}>
                <Typography variant="h2" component="h3">
                    Get in Contact With Us
                    </Typography>
                    <Typography component="p">
                    Feel free to reach out by email, mail or phone number. We respond to all inquires within 48 hours.
                 </Typography>
                </Paper> 

              </Grid>


              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image=''
                    title="Learn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Email
                        </Typography>
                        <Typography component="p">
                        contact@roots.org
          
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>

              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image=''
                    title="Learn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Mail
                        </Typography>
                        <Typography component="p">
                        1851 NE Grant Ln
                        Seattle, WA 98195

          
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>

              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image=''
                    title="Learn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Phone Number
                        </Typography>
                        <Typography component="p">
                        (206) 111-111

          
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>

            
            
            


              <Grid item xs={12}>
                <Footer />
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