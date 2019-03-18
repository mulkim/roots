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

import ah from './ah.png';
import gh from './gh.png';
import ms from './ms.jpg';
import { AvHd } from "material-ui/svg-icons";

import engineer from './engineer.jpg';
import nurse from './nurse.jpg';
import at from './att.jpg';
import Footer from './footer';


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
    },
    card_media: {
        height: 325,
        maxWidth: 1600,
    },
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
                    Partnering with Roots helps your organization find talented job applicants from around the world. We found that talented job seekers struggled
                    to find job opportunities abroad. They were struggling to connect with companies abroad and find legitmate opportunities that were not just spam
                    job postings. If your company partners with us, then you can post your job description and have acess to our talent network. Job seekers 
                    will be assured your company is a great place to work. We also help you tailor your job description to attract international talent.
                 </Typography>
                 <Button variant="contained" color="primary" className={classes.button} a href= "https://goo.gl/forms/zbdD2WHdQg0E9qx03">
                        Post your Job Now
                </Button>
                </Paper> 

              </Grid>


              <Grid item xs={12}>

                <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                    Partner Testimonies
                    </Typography>
                    <Typography component="p">
                    Here are just some of our partner employers that used Roots to fill their vacant positions
                 </Typography>
                </Paper> 

              </Grid>

              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image={ah}
                    title="Learn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Alfa Inc
                        </Typography>
                        <Typography component="p">
                        “Before we became a Roots Partner, it would take us months to fill our job roles. Roots has helped us find intelligent remote talent that drives success within our business!"
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
                    image= {gh}
                    title="Connect"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Green Stripe
                        </Typography>
                        <Typography component="p">
                        “We’re proud to be associated with Roots for over seven years! Roots mission aligns to our own and has led us to hire individuals around the world.“
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
                    image={ms}
                    title="Apply"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            KP Capital
                        </Typography>
                        <Typography component="p">
                        "Our highest hiring percentage comes from Roots job site. We always get the highest volume of qualified applications for our positions with Roots” 
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>

        
            <Grid item xs={12}>

                <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                    Job Seeker Testimonies
                    </Typography>
                    <Typography component="p">
                    Here from some of the talented youth that used Roots to secure their job
                </Typography>
                </Paper> 

                </Grid>

                <Grid item xs={4}>
                <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.card_media}
                    image={engineer}
                    title="Learn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Dave B, Electrical Engineer
                        </Typography>
                        <Typography component="p">
                        “ Roots has allowed me to find a job that I love doing in a country that I would have never imagined living in. To know that the work I am doing makes a direct impact on individuals in African villages is a life changing experience. “
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
                    image={nurse}
                    title="Connect"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Rahel G, Registered Nurse
                        </Typography>
                        <Typography component="p">
                        “ Roots site has prepared me with the necessary resources that I needed to know before relocating to Ethiopia. I strongly advise that anyone interested in learning about how this process works, refer to Roots site.“ 
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
                    image={at}
                    title="Apply"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Mike M, Attorney
                        </Typography>
                        <Typography component="p">
                        “ Since joining my company almost five years ago, I’ve learned so many new things within my field of study. I will always be thankful to Roots job site for connecting me with a company that continues to push me to grow, not only within the company but also as a person “ 
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