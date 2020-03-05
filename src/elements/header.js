import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import InputIcon from '@material-ui/icons/Input'
import CartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },

  linkIcons: {
    textDecoration: 'none',
    color: 'white',
  },

  cartIcon: {
    textDecoration: 'none',
    color: 'white',
    marginRight: '1em',
  },

  linkMain: {
    textDecoration: 'none',
    color: 'white',
  },

  search: {
    textAlign: 'left',
    backgroundColor: '#f7f7f7',
    border: 'none',
    borderRadius: '6px',
    flexGrow: 1,
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(22),
  },
}))

export default function () {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to={`/main`} className={classes.linkMain}>
          <Typography variant="h3" className={classes.title}>
            BIBLIO
          </Typography>
        </Link>
        <InputBase
          className={classes.search}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        <Link to={`/cart`} className={classes.cartIcon}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <CartIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to={`/`} className={classes.linkIcons}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <InputIcon fontSize="large" />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
