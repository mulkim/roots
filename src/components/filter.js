import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class Filter extends React.Component {
  state = {
    addis: true,
    jima: true,
    dessie: true,
    health: true,
    tech: true,
    law: true,
    full: true,
    part: true,
    intern: true,
    volunteer: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <Grid item xs={4}>
        <FormLabel component="legend">Location</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.addis}
                onChange={this.handleChange('addis')}
                value="addis"
              />
            }
            label="Addis Ababa"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.jima}
                onChange={this.handleChange('jima')}
                value="jima"
              />
            }
            label="Jima"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.dessie}
                onChange={this.handleChange('dessie')}
                value="dessie"
              />
            }
            label="Dessie"
          />
        </FormGroup>
        </Grid>
        <Grid item xs={4}>
        <FormLabel component="legend">Industry</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.health}
                onChange={this.handleChange('health')}
                value="health"
              />
            }
            label="Health"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.tech}
                onChange={this.handleChange('tech')}
                value="tech"
              />
            }
            label="Technology"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.law}
                onChange={this.handleChange('law')}
                value="law"
              />
            }
            label="Law"
          />
        </FormGroup>
        </Grid>
        <Grid item xs={4}>
        <FormLabel component="legend">Entry Level</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.full}
                onChange={this.handleChange('full')}
                value="full"
              />
            }
            label="Full-Time"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.part}
                onChange={this.handleChange('part')}
                value="part"
              />
            }
            label="Part-Time"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.intern}
                onChange={this.handleChange('intern')}
                value="intern"
              />
            }
            label="Internship"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.volunteer}
                onChange={this.handleChange('volunteer')}
                value="volunteer"
              />
            }
            label="Volunteer"
          />
        </FormGroup>
        </Grid>
      </FormControl>
    );
  }
}

export default Filter;