import { getId } from '../utils/utilsApi.ts'
import type Planet from '../interfaces/Planet.ts'

export async function getAllPlanets (): Promise<Planet[]> {
  const res = await fetch('https://swapi.info/api/planets')
  return (await res.json()).map((planet: Planet) => ({ ...planet, id: getId(planet.url) }))
}

export async function getPlanet (planetId: string): Promise<Planet> {
  const res = await fetch(`https://swapi.info/api/planets/${planetId}`)
  return await res.json()
}