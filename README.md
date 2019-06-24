[![npm version](https://img.shields.io/npm/v/schuifel-shuffle-data.svg?style=flat-square)](https://www.npmjs.com/package/schuifel-shuffle-data)
[![npm downloads](https://img.shields.io/npm/dt/schuifel-shuffle-data.svg?style=flat-square)](https://www.npmjs.com/package/schuifel-shuffle-data)
[![Build Status](https://travis-ci.org/schuifel-shuffle/data.svg?branch=master)](https://travis-ci.org/schuifel-shuffle/data)

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

### Moods

Tracks are organized by moods. A track can have multiple moods, consisting of one the moods listed below;

- lonely
- romancing
- lovemaking
