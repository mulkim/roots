import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
                        <Grid item xs={10}>
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
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Qualifications</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    Drafting skills <br />
                                    General knowledge of Architectural CAD Standards <br />
                                    Following company drawing standards <br />
                                    Great sheet layouts are a must <br />
                                    Detailed drafting <br />
                                    Appropriate layering, grouping, blocking, & file organization <br />
                                    Composing Bill of Materials <br />
                                    Rhino 3D architectural/industrial modeling <br />
                                    Ability to be flexible & manage time resources with multiple projects <br />
                                    Must be able to collaborate, organize, & communicate in a team environment <br />
                                    Architectural Portfolio to show at the time of interview <br />
                                    Drafting: 3 years (Required) <br />
                                    Architectural Design: 3 years (Required) <br />
                                    Bachelor's (Preferred) <br />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        <CardActions>
                            <Button size="small" href="https://www.ezega.com/Jobs/viewjobposting/52785/index/Architecture-Designer?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" color="primary">
                                Apply Now
                            </Button>
                        </CardActions>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
                        </Card>
                        </Grid>
                        <Grid item xs={10}>
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
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Qualifications</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    Bachelor’s Degree in Nursing <br />
                                    Current Enrollment in a BSN Program OR Commitment to Achieve a BSN Degree <br />
                                    Licensed as a Registered Nurse <br />
                                    Three years acute care nursing experience or one-year acute care nursing experience plus two years leadership experience required. <br />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <CardActions>
                            <Button size="small" href="https://www.linkedin.com/jobs/view/nurse-manager-at-cure-international-inc-532717317/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" color="primary">
                                Apply Now
                            </Button>
                            </CardActions>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
                        </Card>
                        </Grid>
                        <Grid item xs={10}>
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
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Qualifications</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    Coordination with in-house architects and outside design consultants (Structural Engineers, Mechanical/Electrical/Plumbing, Geotechnical Engineers, Landscape Architects, Environmental Scientists, Geologists, Etc.) <br />
                                    Technical leadership support to in-house property development team. <br />
                                    Direct communication with project permitting agencies. <br />
                                    Civil Engineer: 5 years (Required) <br />
                                    Bachelor's (Required) <br />
                                    Off-site Frontage/Urban Streets <br />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <CardActions>
                            <Button size="small" href="https://etcareers.com/job/10574/civil-engineer/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" color="primary">
                                Apply Now
                            </Button>
                            </CardActions>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
                        </Card>
                        </Grid>
                        <Grid item xs={10}>
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
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Qualifications</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    Are passionate about open science and collaboration <br />
                                    Are in a graduate program studying computational biology and want to get hands-on experience <br />
                                    Are proficient in R or Python <br />
                                    Have extensive knowledge of machine learning or statistics <br />
                                    Enjoy working in a dynamic team environment <br />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <CardActions>
                            <Button size="small" href="https://www.linkedin.com/jobs/view/senior-research-associate-at-laterite-1174810854/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic" color="primary">
                                Apply Now
                            </Button>
                            </CardActions>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
                        </Card>
                        </Grid>
                        <Grid item xs={10}>
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
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Qualifications</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    As a Volunteer, you would provide heart centered comfort rounds and act as a liaison and communicate with patient/family/guests. This volunteer position would include: <br />
                                    Bed-side Support <br />
                                    Answering Patient Call Lights <br />
                                    Supporting the Nursing Care Team with Errands <br />
                                    Maintaining a Safe Environment <br />
                                    Assisting with Discharge of our Patients <br />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <CardActions>
                            <Button size="small" href="https://www.linkedin.com/jobs/view/volunteer-intern-%28monitoring%29-at-un-world-food-programme-wfp-1167252387/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"  color="primary">
                                Apply Now
                            </Button>
                            </CardActions>
                        </CardContent>
                        </Paper>
                        </CardActionArea>
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