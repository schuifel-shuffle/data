const assert = require('assert');
const { shuffle } = require('../index');

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.999;
global.Math = mockMath;

describe('Shuffle', () => {
  it('should return random track', () => {
    const track = shuffle();

    assert.strictEqual(track.name, '7 Seconds');
  });

  it('should return random track with the given mood', () => {
    const track = shuffle('lovemaking');
    assert(track.moods.indexOf('lovemaking') !== -1);
  });
});
