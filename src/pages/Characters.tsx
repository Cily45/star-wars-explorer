import type Character from '../interfaces/Character.ts'
import CharacterCard from '../components/cards/CharacterCard.tsx'
import { useEffect, useState } from 'react'
import * as React from 'react'
import { getAllCharacters } from '../services/characterService.ts'
import { useThemeToggle } from '../contexts/ThemeToggleContext.tsx' // <-- Import du contexte

const Characters = React.memo(function Characters() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [search, setSearch] = useState('')
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])

  const context = useThemeToggle()

  async function loadCharacters() {
    const data = await getAllCharacters()
    setCharacters(data)
    setFilteredCharacters(data)
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    setFilteredCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  return (
    <div className={`p-8 min-h-screen transition-colors duration-500 flex flex-col items-center ${context.theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'}`}>

      <h2 className="text-3xl md:text-4xl uppercase tracking-[0.15em] font-bold text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] mb-8 text-center">
        Archives Galactiques
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
          placeholder="Rechercher une entité..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg italic opacity-70 mt-10">
            Aucun enregistrement trouvé dans les archives...
          </p>
        )}
      </div>

    </div>
  )
})

export default Characters