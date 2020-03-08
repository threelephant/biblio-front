import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  title: {
    margin: '1.5em 0 0 1em',
  },

  textfield: {
    width: '28em',
  },

  button: {
    margin: '1.5em 0 0.5em 0',
  },
}))

export default function () {
  const classes = useStyles()

  return (
    <>
    <Grid
      container
      direction="column"
      justify="space-between"
      spacing={2}
      className={classes.title}
    >
      <Grid key={"typo"} item>
      <Typography variant="h4">
        Добавить книгу
      </Typography>
      </Grid>
      <Grid key={"title"} item>
      <TextField  
        id="title" 
        label="Название книги"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"isbn"} item>
      <TextField  
        id="isbn" 
        label="ISBN"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"author"} item>
      <TextField  
        id="author" 
        label="Автор"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"price"} item>
      <TextField  
        id="price" 
        label="Цена"
        type="number"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"pageNumber"} item>
      <TextField  
        id="pageNumber" 
        label="Количество страниц"
        type="number"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"editor"} item>
      <TextField  
        id="editor" 
        label="Редактор"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"cover"} item>
      <TextField  
        id="cover" 
        label="Тип обложки"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"weight"} item>
      <TextField  
        id="weight" 
        label="Вес книги"
        type="number"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"genre"} item>
      <TextField  
        id="genre" 
        label="Жанр книги"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"publisher"} item>
      <TextField  
        id="publisher" 
        label="Издатель"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"series"} item>
      <TextField  
        id="series" 
        label="Серия книг"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"translator"} item>
      <TextField  
        id="translator" 
        label="Переводчик"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"language"} item>
      <TextField  
        id="language" 
        label="Язык"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"date"} item>
      <TextField  
        id="date" 
        label="Год издания"
        type="number"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"height"} item>
      <TextField  
        id="height" 
        label="Высота"
        type="number"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"width"} item>
      <TextField  
        id="width" 
        label="Ширина"
        type="number"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"length"} item>
      <TextField  
        id="length" 
        label="Длина"
        type="number"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"rating"} item>
      <TextField  
        id="rating" 
        label="Рейтинг"
        type="number"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"url"} item>
      <TextField  
        id="url" 
        label="URL"
        className={classes.textfield}
      />
      </Grid>
      <Grid key={"post"} item>
      <Button 
        variant="contained"
        size="large"
        className={classes.button} 
        color="primary"
        >
        Отправить
      </Button>
      </Grid>
    </Grid>
    </>
  )
}