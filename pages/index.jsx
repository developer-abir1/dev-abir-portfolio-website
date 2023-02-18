import { Box, Button, CssBaseline, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Layout from '../app/layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column-reverse', md: 'row' },
          }}
        >
          <Grid item xs={12} md={6} sm={6}>
            <Typography
              variant="h2"
              component={'h6'}
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: '#fff',
              }}
            >
              MD Abir Khan
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <img
              src={'https://i.ibb.co/Hh4x0Hr/abir-image.png'}
              style={{
                objectFit: 'cover',
                width: '100%',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomePage;
