import type Character from '../../interfaces/Character.ts'
import { Link } from 'react-router'

interface CharacterCardProps{
  character: Character
}
function CharacterCard({character} : CharacterCardProps){
  return (
    <Link to={`/personnage/${character.id}`} key={character.name}>
      <article
        className="m-auto max-w-sm w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="p-5">
          <h2 className="text-white font-bold text-2xl line-clamp-1" title={character.name}>
            {character.name}
          </h2>
        </div>
      </article>
    </Link>
  )
}

export default CharacterCard;