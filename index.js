const tracks = require('./data/tracks.json');

/**
 * Returns a random track
 *
 * @param {string} mood 
 */
const shuffle = mood => {
  let filtered = tracks;
  if (mood) {
    filtered = tracks.filter(track => track.moods && track.moods.includes(mood));
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);

  return filtered[randomIndex];
};

module.exports = {
  shuffle
};
