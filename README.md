# Mount Bookmark :mount_fuji:

Mount Bookmark is a self-hosted, highly customizable bookmark board that allows you to view any YouTube stream/video in the background. I made it first as a simple project for myself, however after seeing that I wasn't the only one interested in such a tool I, decided to make it into my first open-source project.

# Installation :volcano:

First clone the sourcecode:

```cmd
git clone https://github.com/LinoIten/mount-bookmark.git
```

To run the react project:

```cmd
npm start
```

If you want to run it in the background you can use [PM2](https://pm2.keymetrics.io/).
```cmd
npm install pm2@latest -g
pm2 start --name mount-bookmark npm -- start
```

For having it as a "New Tab" page you could use the [New Tab Redirect Extension](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) for Chrome. 

# Customization:scroll:

Under **/src/config** you'll find two json files. 

### colorPalette.json

```json
{
  "backroundBox": "rgba(37,42,51,0.98)",
  "icon": "rgba(252,252,252,1.0)",
  "accent1": "rgba(242,183,86,1.0)",
  "text": {
    "primary": "#FCFCFC",
    "secondary": "rgba(242,183,86,0.5)"
  }
}
```

As the name suggests here you can define all the colors in the app. You can use both **HEX** and **rgba()**.

### settings.json

```json
{
  "bookmarkCategories": [
    {
      "name": "media",
      "bookmarks": [
        {
            "name": "youtube", 
            "link": "youtube.com", 
            "svgPath": "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"
        },
      ]
    },
    {
      "name": "various",
      "bookmarks": [
        {
          "name": "mail", 
          "link": "mail.startmail.com", 
          "svgPath": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        },
        {
            "name": "digitec", 
            "link": "digitec.ch", 
            "svgPath": "M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"
        },
      ]
    }
  ],
  "videoSettings": {
    "videoId": "QOjmvL3e7Lc",
    "autoplay": true,
    "mute": 1,
    "offSet": {
        "top": "0px",
        "right": "0px",
        "bottom": "0px",
        "left": "0px"
    }
  },
  "searchEngine": "https://www.ecosia.org/search?q="
}
```

> **_Note:_**  Currently the only way to use Icons is to use the svg-path

The names of each attribute should be fairly self-explanatory!
