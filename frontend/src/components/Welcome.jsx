import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import './EmailForm.css'


function Welcome() {
  return (
    <Grid className='form'
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: '2rem', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to MERN App
          </Typography>
          <Typography variant="body1">
            Congratulations! You have successfully logged in to Arjun's MERN app.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Welcome;
