import type Movie from '../interfaces/Movie.ts'
import MovieCard from '../components/cards/MovieCard.tsx'
import { useEffect, useState } from 'react'
import * as React from 'react'
import { getAllMovies } from '../services/movieService.ts'
import { useThemeToggle } from '../contexts/ThemeToggleContext.tsx' // <-- Import du contexte

const Movies = React.memo(function Movies () {
  const [movies, setMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const [search, setSearch] = useState('')

  const context = useThemeToggle()

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
    <div className={`p-8 min-h-screen transition-colors duration-500 flex flex-col items-center ${context.theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'}`}>
      <h2 className="text-3xl md:text-4xl uppercase tracking-[0.15em] font-bold text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] mb-8 text-center">
        Holocrons Cinématographiques
      </h2>

      <div className="w-full max-w-md mb-10">
        <input
          className={`w-full font-mono outline-none transition-all duration-500 rounded-none border-b-2 px-4 py-3 bg-opacity-10 backdrop-blur-sm
            ${context.theme === 'dark' 
              ? 'bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500 focus:border-red-600 focus:bg-red-950/20 focus:shadow-[0_10px_20px_-10px_rgba(220,38,38,0.5)]' 
              : 'bg-white border-neutral-300 text-black placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-50/50 focus:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.5)]'
            }
          `}
          type="text"
          placeholder="Rechercher un épisode..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg italic opacity-70 mt-10">
            Aucun holocron ne correspond à cette recherche...
          </p>
        )}
      </div>
    </div>
  )

})

export default Movies