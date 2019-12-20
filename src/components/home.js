import React, { Component} from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import classNames from 'classname';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles/global.css';
import placeholder from './capetown.png';
import Footer from './footer';

import learn from './learn.JPG';
import connect from './connect.JPG';
import apply from './apply.jpg';

import Button from '@material-ui/core/Button';

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
    image_media: {
        height: 620,
        maxWidth: 1600,
    },
    card_media : {
        height: 325,
        maxWidth: 1600,
    }
  });

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
        <div className={classNames('fillParent', classes.container, classes.root)}>
            <Grid container spacing={34}>
              <Grid item xs={12}>
              <Card className={classes.card}>
                <CardMedia
                    className={classes.image_media}
                    image={placeholder}
                    title="Ghana's Business Center"
                    />
              </Card>
              </Grid>

              <Grid item xs={12}>

                <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                    <ln></ln>
                    </Typography>
                    <Typography component="p">
                    <ln></ln>
                 </Typography>
                
                </Paper> 

              </Grid>

              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image={apply}
                    title="Apply"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Apply
                        </Typography>
                        <Typography component="p">
                        Find a well-paying job in any field of work or
                            seek grants and relocation offers.
                        </Typography>
                    </CardContent>
                    <Button variant="contained" color="primary" a href= "./jobs">
                    Find a Job Today
                    </Button>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image={connect}
                    title="Connect"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Connect
                        </Typography>
                        <Typography component="p">
                            Strengthen the connection between fellow job seekers and 
                            Ethiopia's companies through the ROOTS community.
                            <br />
                        </Typography>
                        </CardContent>
                        <Button variant="contained" color="primary" a href= "./partners">
                          Partner with Us
                        </Button>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image={learn}
                    title="Learn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Learn
                        </Typography>
                        <Typography component="p">
                            Learn more about about the culture of Ethiopia to help you
                            relocate to the country
                        </Typography>
                        </CardContent>
                        <Button variant="contained" color="primary" a href= "./learn">
                        Learn
                        </Button>
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
