import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles, withTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  auth: {
    margin: '6em 3em 0 0',
    float: 'right',
    flexGrow: 1,
  },

  textfield: {
    width: '28em',
    backgroundColor: 'white',
  },

  h1: {
    margin: '0 13.6em 0 0',
    fontFamily: 'sans-serif',
  },

  button: {
    margin: '1.5em 23.3em 0 0',
  },

  image: {
    margin: '2em 0 0 2.5em',
  },
}))

export default function () {
  const classes = useStyles()

  return (
    <>
      <img 
        src={require('../images/book_girl.png')} 
        alt="Girl with a book"
        className={classes.image}>
      </img>
      <div className={classes.auth}>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="flex-end"
          spacing={2}
          >
            <Grid key={0} item className={classes.h1}>
              <h1>Authentication</h1>
            </Grid>
            <Grid key={1} item>
              <TextField  
                  id="login" 
                  type="login"
                  label="Login" 
                  variant="outlined"
                  className={classes.textfield}
                />
            </Grid>
            <Grid key={2} item>  
              <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  className={classes.textfield}
                />    
            </Grid>
            <Grid 
              key={3} 
              item variant="contained">
              <Button 
                variant="contained"
                size="large" 
                className={classes.button} 
                color="primary">
                Log In
              </Button>
            </Grid>
        </Grid>
      </div>
    </>
  );
}
