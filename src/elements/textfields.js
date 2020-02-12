import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  auth: {
    padding: '6em 3em 0 0',
  },
}))

export default function () {
  const classes = useStyles()

  return (
    <div className={classes.auth}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="flex-end"
        spacing={2}
        >
          <Grid key={0} item>
            <h1>Authentication</h1>
          </Grid>
          <Grid key={1} item>
            <TextField  
                style={{ margin: 8 }}
                id="login" 
                type="login"
                label="Login" 
                variant="outlined"
              />
          </Grid>
          <Grid key={2} item>  
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />    
            </Grid>
    </Grid>
    </div>
  );
}
