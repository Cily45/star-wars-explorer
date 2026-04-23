import PlanetCard from '../components/cards/PlanetCard.tsx'
import type Planet from '../interfaces/Planet.ts'
import { useEffect, useState } from 'react'
import * as React from 'react'
import { getAllPlanets } from '../services/planetService.ts'
import { useThemeToggle } from '../contexts/ThemeToggleContext.tsx'

const Planets = React.memo(function Planets () {
  const [planets, setPlanets] = useState<Planet[]>([])
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([])
  const [search, setSearch] = useState('')

  const context = useThemeToggle()

  async function loadPlanets () {
    const data = await getAllPlanets()
    setPlanets(data)
    setFilteredPlanets(data)
  }

  function handleSearchChange (event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    setFilteredPlanets(planets.filter((movie) => movie.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  useEffect(() => {
    loadPlanets()
  }, [])

  return (
    <div className={`p-8 min-h-screen transition-colors duration-500 flex flex-col items-center ${context.theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'}`}>
      <h2 className="text-3xl md:text-4xl uppercase tracking-[0.15em] font-bold text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] mb-8 text-center">
        Archives galactiques
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
          placeholder="Rechercher une planète..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredPlanets.length > 0 ? (
          filteredPlanets.map(planet => (
            <PlanetCard key={planet.id} planet={planet} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg italic opacity-70 mt-10">
            Aucune planète ne correspond à cette recherche...
          </p>
        )}
      </div>
    </div>
  )

})

export default Planets