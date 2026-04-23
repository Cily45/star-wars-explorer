import './App.css'
import Header from './components/Header.tsx'
import HomePage from './pages/HomePage.tsx'
import { Route, Routes } from 'react-router'
import Characters from './pages/Characters.tsx'
import Planets from './pages/Planets.tsx'
import CharacterPage from './pages/CharacterPage.tsx'
import PlanetPage from './pages/PlanetPage.tsx'
import Movies from './pages/Movies.tsx'
import MoviePage from './pages/MoviePage.tsx'

function App () {
  return (
    <>
      <Header/>

      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/film" element={<Movies/>}/>
          <Route path="/personnage" element={<Characters/>}/>
          <Route path="/planete" element={<Planets/>}/>
          <Route path="/film/:id" element={<MoviePage/>}/>
          <Route path="/personnage/:id" element={<CharacterPage/>}/>
          <Route path="/planete/:id" element={<PlanetPage/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
