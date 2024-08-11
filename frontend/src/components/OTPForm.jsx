import React, { useState } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function OTPForm({ email }) {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://exit-exam-beta.vercel.app/api/verify-otp', { email, otp });
      if (response.data.success) {
        alert('OTP Verified');
        navigate('/welcome');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Invalid OTP - Check Email for OTP')
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
    >
      <Grid item xs={8} sm={8} md={12}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" align="center" gutterBottom>
              Enter OTP
            </Typography>
            <TextField
              label="Enter OTP"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default OTPForm;
