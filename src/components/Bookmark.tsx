import React, { useState } from 'react';

import clsx from 'clsx';

import { Grid, Link, makeStyles, SvgIcon, Typography } from '@material-ui/core';

import colorPalette from '../config/colorPalette.json';

const useStyles = makeStyles({
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
  icon: {
    color: colorPalette.icon
  },
  bookmarkIcon: {
    marginRight: "10px"
  }
});

interface IBookmark {
  icon?: string,
  name?: string,
  link?: string
}

export default function Bookmark(props: IBookmark) {
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
