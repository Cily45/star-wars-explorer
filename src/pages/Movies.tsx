import type Movie from '../interfaces/Movie.ts'
import MovieCard from '../components/cards/MovieCard.tsx'
import { useEffect, useState } from 'react'
import * as React from 'react'
import { getAllMovies } from '../services/movieService.ts'

const Movies = React.memo(function Movies () {
  const [movies, setMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const [search, setSearch] = useState('')


  async function loadMovies () {
    const data: Movie[] = await getAllMovies()
    setMovies(data)
    setFilteredMovies(data.sort((a: Movie, b: Movie) => a.episode_id - b.episode_id))
  }

  function handleSearchChange (event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    setFilteredMovies(movies.filter((movie) => movie.title.toLowerCase().includes(event.target.value.toLowerCase())).sort((a: Movie, b: Movie) => a.episode_id - b.episode_id))
  }

  useEffect(() => {
    loadMovies()
  }, [])

  return (
    <div>
      <input
        className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-yellow-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-yellow-400"
        type="text"
        value={search}
        onChange={handleSearchChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {filteredMovies.map(movie => {
          return (
            <MovieCard key={movie.id} movie={movie}/>
          )

        })}
      </div>
    </div>
  )

})

export default Movies