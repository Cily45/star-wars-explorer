import type Movie from '../interfaces/Movie.ts'
import { getId } from '../utils/utilsApi.ts'

export async function getAllMovies (): Promise<Movie[]> {
  const res = await fetch('https://swapi.info/api/films')
  return (await res.json()).map((movie: Movie) => ({ ...movie, id: getId(movie.url) }))
}

export async function getMovie (movieId: string): Promise<Movie> {
  const res = await fetch(`https://swapi.info/api/films/${movieId}`)
  return await res.json()
}