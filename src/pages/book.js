import React, { useState, useEffect } from 'react'
import Header from '../elements/header'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import services from '../services/services'

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

export default function (props) {
  const classes = useStyles()
  const [ book, setBook ] = useState({ title: "" })

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
      <Typography variant="h3" className={classes.title}>
        {book.title}
      </Typography>
    </>
  )
}
