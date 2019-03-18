import Modal from '@material-ui/core/Modal';
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
import Filter from './filter';
import fakejobs from './fake-jobs.json';
import architect from './architect.png';
import civil from './civil.jpg';
import nurse from './nurse.jpeg';
import researchers from './researchers.jpg';
import volunteer from './volunteer.jpg';

let models = fakejobs;
let modal1 = false;
let modal2 = false;
let modal3 = false;
let modal4 = false;
let modal5 = false;
let modal6 = false;

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
        height: 200,
        width: 350,
    },
    modal: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
  });

  function getModalStyle() {
    const top = 50
    const left = 50 
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

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
                        <Filter />
                    </Grid>
                    <Grid item xs={8}>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <CardMedia
                            component="img"
                            alt={models[0]['job-role']}
                            className={classes.card_media}
                            image={architect}
                            title={models[0]['job-role']}
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                {models[0]['job-role']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[0]['location']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[0]['job-type']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[0]['industry']}
                            </Typography>
                        <CardContent className={classes}>
                            <Typography component="p">
                                {models[0]['info']}
                            </Typography>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Read More
                            </Button>
                            <Button size="small" href="https://www.ezega.com/Jobs/viewjobposting/52785/index/Architecture-Designer?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <CardMedia
                            component="img"
                            alt={models[1]['job-role']}
                            className={classes.card_media}
                            height="140"
                            image={nurse}
                            title={models[1]['job-role']}
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                {models[1]['job-role']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[1]['location']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[1]['job-type']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[1]['industry']}
                            </Typography>
                        <CardContent className={classes}>
                            <Typography component="p">
                                {models[1]['info']}
                            </Typography>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Read More
                            </Button>
                            <Button size="small" href="https://www.linkedin.com/jobs/view/nurse-manager-at-cure-international-inc-532717317/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <CardMedia
                            component="img"
                            alt={models[2]['job-role']}
                            className={classes.card_media}
                            height="140"
                            image={civil}
                            title={models[2]['job-role']}
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                {models[2]['job-role']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[2]['location']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[2]['job-type']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[2]['industry']}
                            </Typography>
                        <CardContent className={classes}>
                            <Typography component="p">
                                {models[2]['info']}
                            </Typography>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" conClick={this.handleOpen} olor="primary">
                                Read More
                            </Button>
                            <Button size="small" href="https://etcareers.com/job/10574/civil-engineer/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <CardMedia
                            component="img"
                            alt={models[3]['job-role']}
                            className={classes.card_media}
                            height="140"
                            image={researchers}
                            title={models[3]['job-role']}
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                {models[3]['job-role']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[3]['location']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[3]['job-type']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[3]['industry']}
                            </Typography>
                        <CardContent className={classes}>
                            <Typography component="p">
                                {models[3]['info']}
                            </Typography>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" onClick={this.handleOpen} color="primary">
                                Read More
                            </Button>
                            <Button size="small" href="https://www.linkedin.com/jobs/view/senior-research-associate-at-laterite-1174810854/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                        <CardActionArea>
                        <Paper className={classes.paper}>
                        <CardMedia
                            component="img"
                            alt={models[4]['job-role']}
                            className={classes.card_media}
                            height="140"
                            image={volunteer}
                            title={models[4]['job-role']}
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                {models[4]['job-role']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[4]['location']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[4]['job-type']}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {models[4]['industry']}
                            </Typography>
                        <CardContent className={classes}>
                            <Typography component="p">
                                {models[4]['info']}
                            </Typography>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" onClick={this.handleOpen} color="primary">
                                Read More
                            </Button>
                            <Button size="small" href="https://www.linkedin.com/jobs/view/volunteer-intern-%28monitoring%29-at-un-world-food-programme-wfp-1167252387/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"  color="primary">
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