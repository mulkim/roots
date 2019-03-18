import React, {Component} from "react";
import { Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import classNames from 'classname';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import SearchBar from 'material-ui-search-bar'
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
    card_media : {
        height: 140,
        width: 140,
        flex: '1 0 auto',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
    }
  });


class Jobs extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classNames('fillParent', classes.container, classes.root)}>
                <Grid container spacing={32}>
                    <Grid item xs={12}>
                         <SearchBar
                            onChange={() => console.log('onChange')}
                            onRequestSearch={() => console.log('onRequestSearch')}
                            style={{
                                margin: '0 auto',
                                maxWidth: 800
                            }}
                        /> 
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            Sort / filter section
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <div className={classes.details}>
                        <CardMedia
                            component="img"
                            alt="Job Title"
                            className={classes.card_media}
                            height="140"
                            image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4="
                            title="Job Title"
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                Job Title
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Location
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Industry
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Entry Level
                            </Typography>
                        </div>
                        <div className={classes.description}>
                        <CardContent className={classes}>
                            <Typography component="p">
                            Job Description
                            </Typography>
                        </CardContent>
                        </div>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Read More
                            </Button>
                            <Button size="small" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <div className={classes.details}>
                        <CardMedia
                            component="img"
                            alt="Job Title"
                            className={classes.card_media}
                            height="140"
                            image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4="
                            title="Job Title"
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                Job Title
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Location
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Industry
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Entry Level
                            </Typography>
                        </div>
                        <div className={classes.description}>
                        <CardContent className={classes}>
                            <Typography component="p">
                            Job Description
                            </Typography>
                        </CardContent>
                        </div>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Read More
                            </Button>
                            <Button size="small" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <div className={classes.details}>
                        <CardMedia
                            component="img"
                            alt="Job Title"
                            className={classes.card_media}
                            height="140"
                            image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4="
                            title="Job Title"
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                Job Title
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Location
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Industry
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Entry Level
                            </Typography>
                        </div>
                        <div className={classes.description}>
                        <CardContent className={classes}>
                            <Typography component="p">
                            Job Description
                            </Typography>
                        </CardContent>
                        </div>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Read More
                            </Button>
                            <Button size="small" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <div className={classes.details}>
                        <CardMedia
                            component="img"
                            alt="Job Title"
                            className={classes.card_media}
                            height="140"
                            image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4="
                            title="Job Title"
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                Job Title
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Location
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Industry
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Entry Level
                            </Typography>
                        </div>
                        <div className={classes.description}>
                        <CardContent className={classes}>
                            <Typography component="p">
                            Job Description
                            </Typography>
                        </CardContent>
                        </div>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Read More
                            </Button>
                            <Button size="small" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <div className={classes.details}>
                        <CardMedia
                            component="img"
                            alt="Job Title"
                            className={classes.card_media}
                            height="140"
                            image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4="
                            title="Job Title"
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                Job Title
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Location
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Industry
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Entry Level
                            </Typography>
                        </div>
                        <div className={classes.description}>
                        <CardContent className={classes}>
                            <Typography component="p">
                            Job Description
                            </Typography>
                        </CardContent>
                        </div>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Read More
                            </Button>
                            <Button size="small" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <div className={classes.details}>
                        <CardMedia
                            component="img"
                            alt="Job Title"
                            className={classes.card_media}
                            height="140"
                            image="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4="
                            title="Job Title"
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                Job Title
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Location
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Industry
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                Entry Level
                            </Typography>
                        </div>
                        <div className={classes.description}>
                        <CardContent className={classes}>
                            <Typography component="p">
                            Job Description
                            </Typography>
                        </CardContent>
                        </div>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Read More
                            </Button>
                            <Button size="small" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Jobs.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Jobs);