import React from "react";
import { Typography, Container, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => (
  <Container>
    <Typography variant="h4">Homepage</Typography>
    <Typography variant="body1">
      Welcome to the Todo demo app for Duodeka built by Simeon Dimov on
      19/04/2024
    </Typography>
    <Box mt={2}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            component={Link}
            to="/todos"
            variant="contained"
            color="primary"
          >
            Go to Todo page
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/info"
            variant="contained"
            color="secondary"
          >
            Go to Info Page
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default HomePage;
