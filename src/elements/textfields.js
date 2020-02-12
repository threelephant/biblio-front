import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList'

export default function () {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-end"
      >
      <GridList padding={10}>
        <TextField 
            id="login" 
            type="login"
            label="Login" 
            variant="outlined"
          />
        <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />                        
      </GridList>
    </Grid>
  );
}
