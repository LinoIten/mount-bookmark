import React, { useState } from 'react';

import clsx from 'clsx';

import { Card, Grid, InputAdornment, Link, makeStyles, SvgIcon, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import colorPalette from '../config/colorPalette.json';
import settings from '../config/settings.json';

const useStyles = makeStyles({
  main: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "40px",
    backgroundColor: colorPalette.backroundBox,
    width: "40%",
    minHeight: "10%",
  },
  bookmarkName: {
    fontFamily: "UbuntuMono",
    letterSpacing: "1.3",
    textAlign: "left",
    fontWeight: "bold",
    color: colorPalette.text.primary,
  },
  bookmarkLink: {
    fontFamily: "UbuntuMono",
    letterSpacing: "0.8",
    textAlign: "left",
    fontWeight: "normal",
    fontSize: "0.7em",
    color: colorPalette.text.secondary,
  },
  bookmarkCategory: {
    fontFamily: "UbuntuMono",
    letterSpacing: "1.3",
    fontSize: "1.3em",
    textAlign: "left",
    fontWeight: "bold",
    color: colorPalette.accent1,
  },
  icon: {
    color: colorPalette.icon
  },
  bookmarkIcon: {
    marginRight: "10px"
  },
  searchBar: {
    width: "100%",
    '& .MuiInput-underline::after': {
      borderBottomColor: colorPalette.accent1,
    },
    '& .MuiInput-underline::before': {
      borderBottomColor: colorPalette.text.primary
    },
    '& input': {
      color: colorPalette.text.primary,
    },
  },
  grid: {
    width: "100%",
    height: "100%",
  }
});

interface IBookmark {
  icon?: string,
  name?: string,
  link?: string
}

function Bookmark(props: IBookmark) {
  const classes = useStyles();

  const {
    icon,
    name,
    link
  } = props

  return (
    <Grid item xs={3}>
      <Link href={"http://" + link} style={{textDecoration: "none"}}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            {icon ? (
              <SvgIcon fontSize="large" className={clsx(classes.icon, classes.bookmarkIcon)}>
                <path d={icon} />
              </SvgIcon>
            ) : null}
          </Grid>
          <Grid item>
            <Grid 
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12}>
                <Typography className={classes.bookmarkName}>{name ? name : ""}</Typography> 
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.bookmarkLink}>{link ? link : ""}</Typography> 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Link>
    </Grid>
  )
}


function Main() { 
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (event: any) => {
    setSearchQuery(event.target.value)
  }

  const handleKeyPress = (event: any) => {
    if(event.key === 'Enter'){
      document.location.href = settings.searchEngine + searchQuery;
    }
  }

  return (
    <Card elevation={3} className={classes.main}>
      <Grid 
        container 
        spacing={2}
        justify="space-evenly"
        alignItems="flex-start"
        className="grid"
        alignContent="space-between"
      >
        <Grid item xs={12}>
          <TextField
            className={classes.searchBar}
            placeholder="Search"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            autoFocus={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {settings.bookmarkCategories.map(category => (
          <Grid item xs={12}>
            <Typography className={classes.bookmarkCategory}>{category.name}</Typography>
            <Grid 
              container 
              spacing={1}
              justify="flex-start"
              alignItems="flex-start"
              className="grid"
              alignContent="space-between"
            >
              {category.bookmarks.map(bookmark => (
                <Bookmark icon={bookmark.svgPath} name={bookmark.name} link={bookmark.link}></Bookmark>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
 
export default Main;
