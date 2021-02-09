import tracks from './data/tracks.json'

export type Mood = 'lonely' | 'erotic' | 'romantic'

export interface Track {
  artists: string[]
  moods: string[]
  name: string
  spotify_id: string
}

const random = (mood?: Mood): Track => {
  let filtered = tracks
  if (typeof mood !== 'undefined') {
    filtered = tracks.filter((track: Track) => Array.isArray(track.moods) && track.moods.includes(mood))
  }

  const randomIndex = Math.floor(Math.random() * filtered.length)

  return filtered[randomIndex]
}

export default {
  random,
  tracks
}
