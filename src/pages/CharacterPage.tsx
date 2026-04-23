import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import type Character from '../interfaces/Character.ts'
import { getCharacter } from '../services/characterService.ts'

function CharacterPage() {
  const {id} = useParams()
  const [character, setCharacter] = useState<Character>()

  async function loadCharacter () {
    setCharacter(await getCharacter(id || ''))
  }

  useEffect(() => {
    loadCharacter()
  },[])

  return(
    <div className="relative overflow-hidden bg-black border border-zinc-800 rounded-lg p-6 m-6 shadow-lg hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-500/30 transition-all duration-300 group font-mono text-zinc-300">

      {/* Effet de fond subtil (étoiles/écran cathodique) */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent opacity-50 pointer-events-none"></div>

      {/* En-tête : Nom et ID */}
      <div className="relative border-b border-zinc-800 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-yellow-400 tracking-widest uppercase group-hover:text-yellow-300 transition-colors duration-300 truncate">
          {character?.name}
        </h2>
      </div>

      {/* Grille de données (Statistiques du personnage) */}
      <div className="relative grid grid-cols-2 gap-y-4 gap-x-2 text-sm">

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Naissance</span>
          <span className="text-blue-400">{character?.birth_year}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Genre</span>
          <span className="text-blue-400">{character?.gender !== 'n/a' ? character?.gender : 'Inconnu'}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Taille</span>
          <span>{character?.height ? `${character?.height} cm` : 'Inconnue'}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Masse</span>
          <span>{character?.mass ? `${character?.mass} kg` : 'Inconnue'}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Cheveux</span>
          <span className="capitalize">{character?.hair_color !== 'n/a' ? character?.hair_color : 'Aucun'}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Yeux</span>
          <span className="capitalize">{character?.eye_color}</span>
        </div>

        <div className="flex flex-col col-span-2">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Teint de peau</span>
          <span className="capitalize">{character?.skin_color}</span>
        </div>

      </div>
    </div>  )
}

export default CharacterPage;