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
                    title="Nature"
                    />
              </Card>
              </Grid>
              

              <Grid item xs={12}>

                <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                    About Roots
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

            <Grid item xs={6}>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.card_media}
                height="40"
                image={placeholder1}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Jobs
                </Typography>
                <Typography component="p">
                    BENEFITS
                    BENEFITS
                    BENEFITS
                    BENEFITS
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary">
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
                image={placeholder1}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Partners
                </Typography>
                <Typography component="p">
                    BENEFITS
                    BENEFITS
                    BENEFITS
                    BENEFITS
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary">
                Post
                </Button>
            </CardActions>
            </Card>
            </Grid>
            


            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                    The Team
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

            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                height="140"
                //image={placeholder1}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Member #1
                </Typography>
                <Typography component="p">
                    About
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary">
                Link to LinkedIn
                </Button>
            </CardActions>
            </Card>

            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                height="140"
                //image={placeholder1}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Member #2
                </Typography>
                <Typography component="p">
                    About
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary">
                Link to LinkedIn
                </Button>
            </CardActions>
            </Card>


            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                height="140"
                //image={placeholder1}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Member #3
                </Typography>
                <Typography component="p">
                    About
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary">
                Link to LinkedIn
                </Button>
            </CardActions>
            </Card>


            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                className={classes.media}
                height="140"
               // image={placeholder1}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Member #4
                </Typography>
                <Typography component="p">
                    About
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary">
                Link to LinkedIn
                </Button>
            </CardActions>
            </Card>



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