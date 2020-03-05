import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Rating from '@material-ui/lab/Rating'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Header from '../elements/header'

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '0.5em',
    textAlign: 'center',
  },

  bookList: {
    textAlign: 'center',
    marginTop: '1.75em',
  },

  bookInfo: {
    textAlign: 'left',
    paddingLeft: '1em',
  },

  price: {
    paddingTop: '0.5em',
    fontWeight: 500,
  },

  image: {
    textAlign: 'left',
    width: '20%',
  },

  raiting: {
    textAlign: 'right',
    paddingLeft: '9em',
  },

  divider: {
    marginTop: '1em',
    marginBottom: '1.5em',
  },

  buttons: {
    marginBottom: '1em',
  },
}))

const ButtonsNavigation = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      className={classes.buttons}
    >
      <Button 
        variant="contained"
        item="contained"
        key={100}
        color="primary"
        size="large"
        disabled
      >
        Prev
      </Button>
      <Button 
        variant="contained"
        item="contained"
        key={101}
        color="primary"
        size="large"
      >
        Next
      </Button>
    </Grid>
)}

export default function () {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Typography variant="h3" className={classes.title}>
        On Sale Today
      </Typography>
      <Grid
        container
        direction="column"
        className={classes.bookList}
      >
        {[1, 2, 3, 4, 5].map((number) =>
          <Container key={number} maxWidth="sm">
            <Grid 
              container
              direction="row"
            >
                <img 
                  src={require('../images/under-the-dome-cover.jpeg')}
                  alt="cover_book"
                  className={classes.image}
                  key={number + 10}
                />
              <Grid key={number + 20} item="contained">
                <Grid 
                  container
                  direction="column"
                  className={classes.bookInfo}
                >
                  <Link to="/book/1">
                    <Typography variant="h6">
                      Under The Dome
                    </Typography>
                  </Link>
                  <Typography variant="subtitle2" color="textSecondary">
                    by Stephen King
                  </Typography>
                  <Typography variant="subtitle1" className={classes.price}>$9.99</Typography>
                </Grid>
              </Grid>
              <Grid key={number + 30} item="contained" className={classes.raiting}>
                <Rating name="read-only" value={number} readOnly/>
              </Grid>
            </Grid>
            <Divider variant="middle" className={classes.divider}/>
          </Container>
        )}
      </Grid>
      <ButtonsNavigation />
    </>
  )
}
