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
import placeholder1 from './ethiopia.jpeg';
import Footer from './footer';

import ethio from './ethio.jpg';
import injera from './injera.jpg';
import air from './air.jpg';
import add from './add.jpg';


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
        height: 510,
    },
    card_media : {
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
                    image={placeholder1}
                    title="Ethiopia"
                    />
              </Card>
              </Grid>
              

              <Grid item xs={12}>

                <Paper className={classes.paper}>
                <Typography variant="h2" component="h3">
                    Learn About Ethiopia 
                    </Typography>
                    <Typography component="p">
                    Ethiopia is a diverse country in East Africa. Part of taking a job in Ethiopia, means getting accostumed to the culture. Here is our 
                    quick guide to understanding the country.
                 </Typography>
                </Paper> 

              </Grid>


              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image={ethio}
                    title="Learn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           About
                        </Typography>
                        <Typography component="p">
                        Ethiopia is proud to be one of the only countries in Africa that has escaped colonization. The area of Ethiopia is 1,104,300 sq. kilometers, which makes it approximately as big as France and Spain combined. The capital of Ethiopia is Addis Ababa, which means "new flower" in Amharic. 

                        The total area of Ethiopia is approximately five times the size of the United Kingdom and is also just less than twice the size of the state of Texas.

                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button} a href= "https://www.linkedin.com/pulse/some-important-facts-ethiopia-teaching-faculty-vinay-kumar-mekala/">
                        Read More
                </Button>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item xs={8}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image= {injera}
                    title="Connect"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Culture
                        </Typography>
                        <Typography component="p">
                        Food is also pivotal to the Ethiopian lifestyle, whether it be the focal point of a communal gathering or the daily challenge to obtain enough food to be comfortable.
                        There is a unique menu of food and drink which makes the most of sometimes scarce resources. Likewise, transport is a pragmatic mixture of the mechanical and the animal which often makes for an interesting spectacle on the street!
                        Music, dance and imagery are everywhere. The churches are filled with a special brand of picturesque images of colour and tradition, while itinerant musicians can be found in every town and village, lightening the mood and providing accompaniment for energetic dances.
                        No matter how urban or rural the community, the people dress with style and pride in their white or embroidered wraps, contrasting with the opulent colours worn by the priests in their long robes holding sparkling umbrellas

                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button} a href= "https://www.linkedin.com/pulse/some-important-facts-ethiopia-teaching-faculty-vinay-kumar-mekala/">
                        Read More
                </Button>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image={air}
                    title="Apply"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Safety
                        </Typography>
                        <Typography component="p">
                        According to LinkedIn, Ethiopia is amongst one of the safest countries to travel and live in the African region. Regarding weather, the average temperature in the Highlands of Ethiopia is approximately 20 degrees centigrade.
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button} a href= "https://www.linkedin.com/pulse/some-important-facts-ethiopia-teaching-faculty-vinay-kumar-mekala/">
                        Read More
                </Button>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>


              <Grid item xs={8}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image={add}
                    title="Learn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Passport 
                        </Typography>
                        <Typography component="p">
                        A valid passport and visa are required for entry to Ethiopia. Be sure to get your passport before arriving in Ethiopia to avoid any potential problems.
                        It’s recommended that you enroll in STEP, the Smart Traveler Enrollment Program, with the U.S. Department of State. It’s a free program that will offer you information from the Embassy on safety conditions, help the U.S. Embassy contact you in an emergency, and help your family and friends get in touch with you in the case of an emergency.
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button} a href= "https://www.linkedin.com/pulse/some-important-facts-ethiopia-teaching-faculty-vinay-kumar-mekala/">
                        Read More
                </Button>
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