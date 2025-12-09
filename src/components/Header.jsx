import { Link } from 'react-router-dom'
import Button from './Button'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

/**
 * Header Component
 * Navigation header with logo and navigation links
 * Transparent styling to blend with hero section
 */
function Header() {
  console.log('Header component rendered')
  
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-smooth">
            <Logo size="md" />
            <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Load Movers
            </span>
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <Link 
              to="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-smooth font-medium hidden md:block"
            >
              Home
            </Link>
            <ThemeToggle />
            <Button to="/quote" variant="primary">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

