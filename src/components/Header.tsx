import { NavLink } from 'react-router'
import type { Link } from '../interfaces/Links.ts'
import { useThemeToggle } from '../contexts/ThemeToggleContext.tsx'

function Header () {
  const links: Link[] = [
    { label: 'Accueil', url: '/' },
    { label: 'Films', url: '/film' },
    { label: 'Personnages', url: '/personnage' },
    { label: 'Planète', url: '/planete' }
  ]

  const context = useThemeToggle()
  return (
    <header className={'w-full flex items-center justify-end'}>
      <nav>
        <ul className={`flex space-x-4 p-4`}>
          {
            links.map(link => {
              return (
                <li key={link.label}>
                  <NavLink to={link.url}
                           className={({ isActive }) => `text-2xl text-yellow-400 hover:text-yellow-200 ${isActive ? 'underline' : ''}`}>{link.label}
                  </NavLink>
                </li>)
            })
          }
        </ul>
      </nav>

      <label className="relative inline-flex items-center cursor-pointer">
        <input className="sr-only peer" type="checkbox" onClick={context.toggleTheme}/>
        <div
          className="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"
        ></div>
        <span className="ml-3 text-sm font-medium text-gray-900">Theme</span>
      </label>


    </header>
  )
}

export default Header