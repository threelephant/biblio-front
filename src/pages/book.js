import React, { useState, useEffect } from 'react'
import Header from '../elements/header'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import services from '../services/services'
import bookObject from '../objects/book'
import Grid from '@material-ui/core/Grid'
import Rating from '@material-ui/lab/Rating'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '0.5em',
    textAlign: 'center',
  },

  bookList: {
    textAlign: 'center',
    marginTop: '1.75em',
    marginLeft: '1.5em',
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
    width: '15%',
  },

  miniImage: {
    textAlign: 'left',
    width: '50%',
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

  bought: {
    paddingTop: '1em',
  }
}))

export default function (props) {
  const classes = useStyles()
  const [ book, setBook ] = useState(bookObject)
  
  useEffect(() => {
    services
      .getOne(props.id)
        .then(newBook => {
          setBook(newBook[0])
      })
  }, [props.id])
  
  return (
    <>
      <Header />
      <Grid
        container
        direction="row"
        spacing={1}
        className={classes.bookList}
      >
        <img
          src={require('../images/under-the-dome-cover.jpeg')}
          alt="cover_book"
          className={classes.image}
        />
        <Grid item="contained">
          <Grid 
            container
            direction="column"
            className={classes.bookInfo}
          >
            <Typography variant="h3">
              {book.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              by {book.author}
            </Typography>
            <Typography variant="h4">
              {book.price} ₽
            </Typography>
          </Grid>
        </Grid>
        <Rating name="read-only" value={book.rating} readOnly/>
      </Grid>
      <Divider variant="middle" className={classes.divider}/>
      <Typography variant="h4" className={classes.bookInfo}>
        Customers who bought this item also bought
      </Typography>
      <Grid 
        container
        direction="row"
        justify="center"
        className={classes.bought}
      >
        {[1, 2, 3, 4, 5].map((number) => 
        <Grid item xs={2}>
          <Grid
            container
            direction="column"
          >
            <img
              src={require('../images/under-the-dome-cover.jpeg')}
              alt="cover"
              className={classes.miniImage}
            >
            </img>
            <Link to="/book/2">
              <Typography variant="h6">
                {book.title}
              </Typography>
            </Link>
            <Typography variant="subtitle2">
              {book.author}
            </Typography>
            <Rating name="read-only" value={book.rating}></Rating>
            <Typography variant="h5">
              {book.price} ₽
            </Typography>
          </Grid>
        </Grid>
        )}
      </Grid>
    </>
  )
}
