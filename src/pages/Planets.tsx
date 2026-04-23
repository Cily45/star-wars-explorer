import PlanetCard from '../components/cards/PlanetCard.tsx'
import type Planet from '../interfaces/Planet.ts'
import { useEffect, useState } from 'react'
import * as React from 'react'
import { getAllPlanets } from '../services/planetService.ts'

const Planets = React.memo(function Planets () {
  const [planets, setPlanets] = useState<Planet[]>([])
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([])
  const [search, setSearch] = useState('')

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
    <div>
      <input
        className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-yellow-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-yellow-400"
        type="text"
        value={search}
        onChange={handleSearchChange}
      />
      <div className={'grid grid-cols-1 md:grid-cols-3 gap-4 p-8'}>
        {
          filteredPlanets.map(planet => {
            return (
              <PlanetCard key={planet.id} planet={planet}/>
            )
          })
        }
      </div>
    </div>)

})

export default Planets