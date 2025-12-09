import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

/**
 * Favicon Updater Component
 * Updates favicon based on current theme
 */
function FaviconUpdater() {
  const { theme } = useTheme()
  
  useEffect(() => {
    const favicon = document.getElementById('favicon')
    if (favicon) {
      favicon.href = theme === 'dark' ? '/favicon-dark.svg' : '/favicon.svg'
    }
    console.log(`Favicon updated for ${theme} mode`)
  }, [theme])
  
  return null
}

export default FaviconUpdater

