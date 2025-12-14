import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import QuoteRequestPage from './pages/QuoteRequestPage'


/**
 * Main App Component
 * Sets up routing for the application
 */
function App() {
  console.log('App component rendered')
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quote" element={<QuoteRequestPage />} />
    </Routes>
    
  )
}

export default App

