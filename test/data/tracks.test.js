const assert = require('assert');
const tracks = require('../../data/tracks.json');

describe('Tracks', () => {
  it('should have all required fields', () => {
    tracks.forEach(track => {
      assert(track.artists.length >= 1);
      assert(typeof track.name !== 'undefined' && track.name !== '');
      assert(typeof track.spotify_id !== 'undefined' && track.spotify_id !== '');
    });
  });
});
