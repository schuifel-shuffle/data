[![npm version](https://img.shields.io/npm/v/schuifel-shuffle-data.svg?style=flat-square)](https://www.npmjs.com/package/schuifel-shuffle-data)
[![npm downloads](https://img.shields.io/npm/dt/schuifel-shuffle-data.svg?style=flat-square)](https://www.npmjs.com/package/schuifel-shuffle-data)
![Build](https://github.com/schuifel-shuffle/data/workflows/CI/badge.svg)

# schuifel-shuffle-data

A collection of romantic tunes and charming imagery.
This is actually just a simplified JSON representation of the [Schuifel Shuffle Spotify Playlist](https://www.schuifelshuffle.nl/spotify).

## Installation

Install with [npm](https://npmjs.org/):

```
npm install --save schuifel-shuffle-data
```

### Usage

Request a random track from the registry

```js
import schuifelShuffle from 'schuifel-shuffle-data'
const randomTrack = schuifelShuffle.random()
```

### Moods

Tracks are organized by moods. A track can have multiple moods, consisting of one the moods listed below;

- lonely
- romancing
- lovemaking
