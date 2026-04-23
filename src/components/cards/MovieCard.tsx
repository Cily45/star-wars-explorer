import type Movie from '../../interfaces/Movie.ts'
import { Link } from 'react-router'
import { getRomanEpisode } from '../../utils/utilsApi.ts'

interface MovieCardProps {
  movie: Movie
}

function MovieCard ({ movie }: MovieCardProps) {

  return (
    <Link to={`/film/${movie.id}`} key={movie.id}>
      <article
        className="m-auto max-w-sm w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="p-5">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wide mb-1">
            Episode {getRomanEpisode(movie.episode_id)}
          </p>
          <h2 className="text-white font-bold text-2xl" title={movie.title}>
            {movie.title}
          </h2>
        </div>
      </article>
    </Link>
  )
}

export default MovieCard