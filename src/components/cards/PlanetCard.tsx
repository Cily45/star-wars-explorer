import type Planet from '../../interfaces/Planet.ts'
import { Link } from 'react-router'

interface PlanetCardProps {
  planet: Planet
}

function PlanetCard ({ planet }: PlanetCardProps) {

  return (
    <Link to={`/planete/${planet.id}`} key={planet.name}>
      <article
        className="m-auto max-w-sm w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="p-5">
          <h2 className="text-white font-bold text-2xl line-clamp-1" title={planet.name}>
            {planet.name}
          </h2>
        </div>
      </article>
    </Link>
  )
}

export default PlanetCard