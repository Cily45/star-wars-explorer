import type Character from '../interfaces/Character.ts'
import CharacterCard from '../components/cards/CharacterCard.tsx'
import { useEffect, useState } from 'react'
import * as React from 'react'
import { getAllCharacters } from '../services/characterService.ts'

const Characters = React.memo(function Characters () {
  const [characters, setCharacters] = useState<Character[]>([])
  const [search, setSearch] = useState('')
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])

  async function loadCharacters () {
    const data = await getAllCharacters()

    setCharacters(data)
    setFilteredCharacters(data)
  }

  function handleSearchChange (event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    setFilteredCharacters(characters.filter((character) => character.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  return (
    <div>
      <input
        className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-yellow-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-yellow-400"
        type="text"
        value={search}
        onChange={handleSearchChange}
      />
      <div className={'grid grid-cols-1 md:grid-cols-3 gap-4 p-8 w-full m-auto'}>
        {
          filteredCharacters.map(character => {
            return (
              <CharacterCard key={character.id} character={character}/>
            )
          })
        }
      </div>
    </div>
  )

})

export default Characters