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
import job_app from './job_app.jpg';
import partner from './partner.jpg';

import mustaf from './mustaf.jpg';
import nathanial from './nathanial.JPG';
import rahel from './Rahel.jpg';
import samia from './Samia.jpg';
import Footer from './footer';


const styles = theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
        margin: theme.spacing.unit,
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
        height:600,
    },
    card_media: {
        height: 325,
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
                    className={classes.image_media}
                    image={placeholder1}
                    title="About Us"
                    />
              </Card>
              </Grid>
              

              <Grid item xs={12}>

                <Paper className={classes.paper}>
                <Typography variant="h2" component="h3">
                    About Roots
                    </Typography>
                    <Typography component="p">
                    Our Mission is to provide necessary tools for individuals to find employment in Ethiopia while helping them with smoother relocation processes.  
                    We strive to partner with small-medium to enterprise businesses. Our site provides 100% free job postings for our partners to find top talent. 
                    We aim to build relations between the US and Ethiopia to drive innovation around the world. As we expand, we hope to partner with the United States 
                     Embassy in Ethiopia to provide employment seekers in the US further relocation resources.  

                    The long-term plan is to connect students in the United States with
                    businesses and opportunities in Africa. The goal is to create a large network
                    of Black students who want to start their professions in Africa. We have
                    decided to begin by focusing their efforts on connecting students with jobs
                    and internships in Ethiopia but plan to spread out across the entire contient.
                 </Typography>
                </Paper> 

              </Grid>

            <Grid item xs={6}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.card_media}
                height="40"
                image={job_app}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Looking for a Job?
                </Typography>
                <Typography component="p">
                    Roots helps to connect people that are looking for employment in Ethiopia with 
                    opportunities abroad. Roots makes sure every job is legitmate and providers
                    job-seekers with the tools to apply for jobs.

                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" a href= "./jobs">
                Find a Job Today
                </Button>
            </CardActions>
            </Card>
            </Grid>

            <Grid item xs={6}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.card_media}
                height="140"
                image={partner}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Partner with us to Find an Employee
                </Typography>
                <Typography component="p">
                    Partner with Roots to post your job opportunities on our platform. We help to prepare
                    your job descriptions and connect you with qualified job applicants that will excel
                    in your positions. Parter with us to fill your vacant positions.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" a href= "./partners">
                Post
                </Button>
            </CardActions>
            </Card>
            </Grid>
            


            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h2" component="h3">
                    The Team
                    </Typography>
                    <Typography component="p">
                    Our team here at Roots is made of professionals that come from all backgrounds and
                    our commmited to help give resources to the next generation to find their dream
                    jobs in Ethiopia. Meet our team members below and feel free to connect with us on LinkedIn.
                 </Typography>
                </Paper> 
            </Grid>

            <Grid item xs={3}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                height="220"
                image={samia}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Samia Mohammed
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" a href = "https://www.linkedin.com/">
                Connect
                </Button>
            </CardActions>
            </Card>
            </Grid>

            <Grid item xs={3}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                height="220"
                image={mustaf}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >
                Mustaf Ali
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" a href = "https://www.linkedin.com/">
                Connect
                </Button>
            </CardActions>
            </Card>
            </Grid>


            <Grid item xs={3}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                height="220"
                image={rahel}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" a href = "https://www.linkedin.com/">
                Rahel Tesfay
                </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" a href = "https://www.linkedin.com/">
                Connect
                </Button>
            </CardActions>
            </Card>
            </Grid>

            <Grid item xs={3}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                height="220"
               image={nathanial}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 Nathanial James
                </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary" a href = "https://www.linkedin.com/">
                Connect
                </Button>
            </CardActions>
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