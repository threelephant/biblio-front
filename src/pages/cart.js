import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Header from '../elements/header'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  title: {
    margin: '1em 0 1em 2em',
  },

  

  gridElem: {
    margin: '2em 0 1em 6em',
  },
}))

export default function () {
  const classes = useStyles()

  return (
    <>
      <Header />
        <Typography variant="h3" className={classes.title}>
          Shopping Cart
        </Typography>
        <hr />
        {[1, 2].map((number) =>
          <Grid key={number} item  className={classes.gridElem}>
            LOL
          </Grid>
        )}
    </>
  )
}
