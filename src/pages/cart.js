import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Header from '../elements/header'

const useStyles = makeStyles(theme => ({
  title: {
    margin: '1em 0 0 2em',
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
    </>
  )
}
