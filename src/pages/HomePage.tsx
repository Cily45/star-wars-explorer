import { useThemeToggle } from '../contexts/ThemeToggleContext.tsx'

function HomePage() {
  const context = useThemeToggle()

  return (
    <div
      className={`min-h-[80vh] flex flex-col items-center justify-center p-8 transition-colors duration-500 text-center
        ${context.theme === 'dark' ? 'text-neutral-200' : 'text-neutral-900'}
      `}
    >
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[0.2em] text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)] mb-8">
        Star Wars
        <br />
        <span className="text-4xl md:text-6xl text-white drop-shadow-md">Explorer</span>
      </h1>

      <p
        className={`max-w-2xl text-lg md:text-xl leading-relaxed tracking-wide
          ${context.theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}
        `}
      >
        Star Wars Explorer est une application qui vous permet d'explorer les confins de la galaxie,
        de découvrir des planètes lointaines et de rencontrer des personnages légendaires.
      </p>

      <div
        className={`mt-10 h-1 w-24 rounded-full shadow-[0_0_10px_currentColor] 
          ${context.theme === 'dark' ? 'bg-red-600 text-red-600' : 'bg-blue-500 text-blue-500'}
        `}
      ></div>
    </div>
  )
}

export default HomePage