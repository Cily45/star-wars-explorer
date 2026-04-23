import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import type Movie from '../interfaces/Movie.ts'
import { formatDate, getRomanEpisode } from '../utils/utilsApi.ts'
import { getMovie } from '../services/movieService.ts'

function MoviePage () {
  const { id } = useParams()
  const [movie, setMovie] = useState<Movie>()

  async function loadPlanet () {
    const data = await getMovie(id || '')
    setMovie(data)
  }

  useEffect(() => {
    loadPlanet()
  },[])

  return (
    <div
      className="relative overflow-hidden bg-black border border-zinc-800 rounded-lg p-6 m-6 shadow-lg hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-500/30 transition-all duration-300 group font-mono text-zinc-300 flex flex-col h-full">

      {/* Effet de fond subtil */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent opacity-50 pointer-events-none"></div>

      {/* En-tête : Titre et Épisode */}
      <div className="relative border-b border-zinc-800 pb-4 mb-4">
        <div className="flex justify-between items-start gap-2">
          <h2
            className="text-xl font-bold text-yellow-400 tracking-widest uppercase group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
            {movie?.title}
          </h2>
          <span
            className="text-blue-400 font-bold text-lg border border-blue-400/30 px-2 py-0.5 rounded bg-blue-400/10 whitespace-nowrap">
            EPISODE {getRomanEpisode(movie?.episode_id || 0)}
          </span>
        </div>
      </div>

      {/* Le fameux "Opening Crawl" (Texte déroulant) */}
      <div className="relative flex-grow mb-4">
        <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-2 block">
          Transmission interceptée
        </span>
        <div className="bg-zinc-900/50 border-l-2 border-yellow-500/50 h-32 overflow-y-auto pr-2 rounded-r-sm">
          <p className="text-yellow-500/90 text-xs text-justify leading-relaxed font-sans italic p-2">
            {movie?.opening_crawl}
          </p>
        </div>
      </div>

      {/* Informations de production */}
      <div className="relative grid grid-cols-2 gap-y-4 gap-x-2 text-sm mt-auto border-t border-zinc-800 pt-4">
        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Date de sortie</span>
          <span className="text-blue-400">{formatDate(movie?.release_date || '')}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Production</span>
          <span className="text-zinc-200 truncate" title={movie?.producer}>
            {movie?.producer}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MoviePage