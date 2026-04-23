import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import type Planet from '../interfaces/Planet.ts'
import { getPlanet } from '../services/planetService.ts'

function PlanetPage () {
  const { id } = useParams()
  const [planet, setPlanet] = useState<Planet>()

  async function getPlanetById () {
    setPlanet(await getPlanet(id || ''))
  }

  useEffect(() => {
    getPlanetById()
  }, [])

  return (
    <div
      className="relative overflow-hidden bg-black border border-zinc-800 rounded-lg p-6 m-6 shadow-lg hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-500/30 transition-all duration-300 group font-mono text-zinc-300">

      {/* Effet de fond subtil */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent opacity-50 pointer-events-none"></div>

      {/* En-tête : Nom et ID */}
      <div className="relative border-b border-zinc-800 pb-4 mb-4">
        <h2
          className="text-2xl font-bold text-yellow-400 tracking-widest uppercase group-hover:text-yellow-300 transition-colors duration-300 truncate">
          {planet?.name}
        </h2>
      </div>

      {/* Grille de données (Statistiques de la planète) */}
      <div className="relative grid grid-cols-2 gap-y-4 gap-x-2 text-sm">

        {/* Informations majeures sur toute la largeur */}
        <div className="flex flex-col col-span-2">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Population</span>
          <span className="text-blue-400 text-base">{planet?.population}</span>
        </div>

        <div className="flex flex-col col-span-2">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Terrain</span>
          <span
            className="capitalize text-zinc-200">{planet?.terrain !== 'unknown' ? planet?.terrain : 'Inconnu'}</span>
        </div>

        {/* Informations secondaires en 2 colonnes */}
        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Climat</span>
          <span className="capitalize">{planet?.climate !== 'unknown' ? planet?.climate : 'Inconnu'}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Gravité</span>
          <span>{planet?.gravity !== 'unknown' ? planet?.gravity : 'N/A'}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Diamètre</span>
          <span>{planet?.diameter !== 'unknown' ? `${planet?.diameter} km` : 'Inconnu'}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Eau en surface</span>
          <span>{planet?.surface_water !== 'unknown' ? `${planet?.surface_water}%` : 'Inconnue'}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Orbite</span>
          <span>{planet?.orbital_period !== 'unknown' ? `${planet?.orbital_period} jours` : 'N/A'}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-zinc-600 uppercase text-[10px] tracking-widest mb-1">Rotation</span>
          <span>{planet?.rotation_period !== 'unknown' ? `${planet?.rotation_period} h` : 'N/A'}</span>
        </div>

      </div>
    </div>
  )
}

export default PlanetPage