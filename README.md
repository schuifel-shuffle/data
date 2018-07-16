# schuifel-shuffle-data

A collection of romantic tunes and charming imagery.

## Goal

This is actually just a simplified JSON representation of the [Schuifel Shuffle Spotify Playlist](https://open.spotify.com/user/thundercatone/playlist/4bckH8h0XjMkpeICjXzmAH?si=xCkqB2BsTrajodeq_xUtbQ).
The goal is to keep this repository in sync with the playlist and allow playlist updates by pull requests.

## Installation

Install with [npm](https://npmjs.org/):

```
npm install --save schuifel-shuffle-data
```

### Usage

Request a random track from the registry

```js
const schuifelShuffle = require('schuifel-shuffle-data');
const track = schuifelShuffle.shuffle();
```
