import React, { useState } from 'react';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles/StyleHome';

export default function InputAdornments() {
  const classes = useStyles();

  const [values, setValues] = useState({
    jobTitle: '',
    email: '',
    company: '',
    phone: '',
    contact: '',
    description: '',
    amount: '',
    jobProgress: '',
    jobTypes: '',
    skills: '',
    industry: '',
  });

  const handleChange = (prop, event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();

    fetch(
      'http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/job/addJob',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      }
    ).then((response) => {
      return response.json();
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="job-title"
            //onChange={handleJobTitleChange}
            onChange={(e) => {
              handleChange('jobTitle', e);
            }}
            value={values.jobTitle}
            className={clsx(classes.margin, classes.textField)}
            placeholder="Job Title"
            helperText="E.g: Front-End Developer, Project Manager"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="email"
            //onChange={handleEmailChange}
            onChange={(e) => {
              handleChange('email', e);
            }}
            value={values.email}
            className={clsx(classes.margin, classes.textField)}
            placeholder="Email address"
            helperText="E.g: Jessica@Reesby.com.au"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="company"
            //onChange={handleCompanyChange}
            onChange={(e) => {
              handleChange('company', e);
            }}
            value={values.company}
            className={clsx(classes.margin, classes.textField)}
            placeholder="Company"
            helperText="E.g: Reesby IoT.PwC"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="phone"
            //onChange={handlePhoneChange}
            onChange={(e) => {
              handleChange('phone', e);
            }}
            value={values.phone}
            className={clsx(classes.margin, classes.textField)}
            placeholder="Phone"
            helperText="E.g: +61 459735924"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="location"
              value={values.location}
              //onChange={handleLocationChange}
              onChange={(e) => {
                handleChange('location', e);
              }}
            >
              <MenuItem value={'sydney'}>Sydney</MenuItem>
              <MenuItem value={'melbourne'}>Melbourne</MenuItem>
              <MenuItem value={'brisbane'}>Brisbane</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="contact"
            //onChange={handleContactChange}
            onChange={(e) => {
              handleChange('contact', e);
            }}
            value={values.contact}
            className={clsx(classes.margin, classes.textField)}
            placeholder="Contact"
            helperText="Main contact person for the job"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={12}>
          <TextField
            id="outlined-basic"
            className={clsx(classes.margin, classes.fullField)}
            //onChange={handleDescriptionChange}
            onChange={(e) => {
              handleChange('description', e);
            }}
            placeholder="Description"
            helperText="Brief description of the job"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FormControl
            variant="outlined"
            className={clsx(classes.margin, classes.selectField)}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Select
            </InputLabel>
            <Select
              id="currency"
              value={values.currency}
              //onChange={handleCurrencyChange}
              onChange={(e) => {
                handleChange('currency', e);
              }}
              label="currency"
            >
              <MenuItem value={'10'}>Ten</MenuItem>
              <MenuItem value={'20'}>Twenty</MenuItem>
              <MenuItem value={'30'}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Please select your currency</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Amount"
            id="amount"
            //onChange={handleAmountChange}
            onChange={(e) => {
              handleChange('amount', e);
            }}
            value={values.amount}
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            helperText="Please select your expected amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FormControl
            variant="outlined"
            className={clsx(classes.margin, classes.selectField)}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Select
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="rateTypes"
              value={values.rateTypes}
              //onChange={handleRateTypesChange}
              onChange={(e) => {
                handleChange('rateTypes', e);
              }}
              label="rateTypes"
            >
              <MenuItem value={'fixed'}>fixed</MenuItem>
              <MenuItem value={'varible'}>varible</MenuItem>
            </Select>
            <FormHelperText>Please select your rate types</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel id="demo-simple-select-label">Job Progress</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="jobProgress"
              value={values.jobProgress}
              //onChange={handleJobProgressChange}
              onChange={(e) => {
                handleChange('jobProgress', e);
              }}
            >
              <MenuItem value={'submit'}>Submit</MenuItem>
              <MenuItem value={'interview'}>Interview</MenuItem>
              <MenuItem value={'offer'}>Offer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel id="demo-simple-select-label">Job Types</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="jobTypes"
              value={values.jobTypes}
              //onChange={handleJobTypesChange}
              onChange={(e) => {
                handleChange('jobTypes', e);
              }}
            >
              <MenuItem value={'fulltime'}>Full time</MenuItem>
              <MenuItem value={'parttime'}>Part time</MenuItem>
              <MenuItem value={'casual'}>Casual</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel id="demo-simple-select-label">Skills</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="skills"
              value={values.skills}
              //onChange={handleSkillsChange}
              onChange={(e) => {
                handleChange('skills', e);
              }}
            >
              <MenuItem value={'development'}>Development</MenuItem>
              <MenuItem value={'management'}>Management</MenuItem>
              <MenuItem value={'consultant'}>Consultant</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel id="demo-simple-select-label">Industry</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="industry"
              value={values.industry}
              //onChange={handleIndustryChange}
              onChange={(e) => {
                handleChange('industry', e);
              }}
            >
              <MenuItem value={'IT'}>IT</MenuItem>
              <MenuItem value={'business'}>Business</MenuItem>
              <MenuItem value={'finance'}>Finance</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={12}>
          <Button
            type="submit"
            color="primary"
            className={clsx(classes.margin, classes.fullField)}
            onClick={submitForm}
            variant="contained"
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
