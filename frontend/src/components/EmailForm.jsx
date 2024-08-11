import React, { useState } from 'react';
import axios from 'axios';
import OTPForm from './OTPForm';
import { Grid, TextField, Button, Typography, Paper } from '@mui/material';
import './EmailForm.css'

function EmailForm() {
  const [email, setEmail] = useState('');
  const [OtpForm, setOtpForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://exit-exam-beta.vercel.app/api/send-otp', { email });
      alert('OTP sent to your email');
      setOtpForm(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <Grid className='form'
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sm={8} md={4}>
      
        <Paper elevation={3} style={{ padding: '2rem' }}>
          {!OtpForm ? (
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" align="center" gutterBottom>
              Login
              </Typography>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                style={{ marginTop: '1rem' }}
              >
                Submit
              </Button>
            </form>
          ) : (
            <OTPForm email={email} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default EmailForm;
