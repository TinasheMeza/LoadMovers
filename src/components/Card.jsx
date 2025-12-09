/**
 * Reusable Card Component
 * Provides consistent card styling with hover effects
 * 
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Card content
 */
function Card({ className = '', children }) {
  console.log('Card component rendered')
  
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-smooth p-6 ${className}`}>
      {children}
    </div>
  )
}

export default Card

