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
    <header
      className="w-full flex items-center justify-end gap-8 px-8 py-5 bg-[#0a0a0a] border-b border-neutral-800 shadow-lg">
      <nav>
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  `uppercase tracking-[0.15em] font-bold transition-all duration-300 pb-1 
                  ${isActive
                    ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] border-b-2 border-yellow-400'
                    : 'text-neutral-400 hover:text-yellow-200 hover:drop-shadow-[0_0_8px_rgba(254,240,138,0.6)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <label className="relative inline-flex items-center cursor-pointer group">
        <input className="sr-only peer" type="checkbox" onClick={context.toggleTheme}/>
        <div className="w-20 text-white h-10 rounded-full bg-neutral-900 border border-neutral-700 transition-all duration-500
          peer-checked:bg-neutral-800
          after:content-['☾'] after:absolute after:top-1 after:left-1 after:bg-neutral-950 after:border after:border-red-600 after:shadow-[0_0_12px_#dc2626] after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 after:text-sm
          peer-checked:after:translate-x-10 peer-checked:after:content-['☀'] peer-checked:after:border-blue-400 peer-checked:after:shadow-[0_0_12px_#60a5fa]"
        ></div>
      </label>
    </header>
  )
}

export default Header