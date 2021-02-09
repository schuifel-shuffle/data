import schuifelShuffle, { Track } from '../src'

describe('Tracks', () => {
  it('should have all required fields', () => {
    schuifelShuffle.tracks.forEach((track: Track) => {
      expect(track.artists.length).toBeGreaterThanOrEqual(1)
      expect(track.name).toBeDefined()
      expect(track.spotify_id).toBeDefined()
    })
  })

  it('should have at least one mood', () => {
    schuifelShuffle.tracks.forEach(track => {
      expect(track.moods.length).toBeGreaterThanOrEqual(1)
    })
  })
})

describe('Shuffle', () => {
  it('should return random track', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.999)

    const track = schuifelShuffle.random()
    expect(track.name).toBe('7 Seconds')

    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('should return random track with the given mood', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.999)

    const track = schuifelShuffle.random('romantic')
    expect(track.moods.indexOf('romantic')).toBeGreaterThan(-1)

    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('should always return a random track', () => {
    const track1 = schuifelShuffle.random()
    const track2 = schuifelShuffle.random()

    expect(track1).not.toEqual(track2)
  })
})
