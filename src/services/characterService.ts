import { getId } from '../utils/utilsApi.ts'
import type Character from '../interfaces/Character.ts'

export async function getAllCharacters (): Promise<Character[]> {
  const res = await fetch('https://swapi.info/api/people')
  return (await res.json()).map((character: Character) => ({ ...character, id: getId(character.url) }))
}

export async function getCharacter (characterId: string): Promise<Character> {
  const res = await fetch(`https://swapi.info/api/people/${characterId}`)
  return await res.json()
}