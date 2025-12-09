/**
 * Logo Component
 * Simple, modern logo for Load Movers
 * Adapts to light/dark mode
 */
function Logo({ className = '', size = 'md' }) {
  console.log('Logo component rendered')
  
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }
  
  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Truck/Box icon */}
      <rect
        x="20"
        y="40"
        width="50"
        height="35"
        rx="3"
        className="fill-primary"
      />
      {/* Box on truck */}
      <rect
        x="25"
        y="30"
        width="25"
        height="20"
        rx="2"
        className="fill-primary-dark"
      />
      {/* Wheels */}
      <circle
        cx="32"
        cy="80"
        r="8"
        className="fill-gray-800"
      />
      <circle
        cx="58"
        cy="80"
        r="8"
        className="fill-gray-800"
      />
      {/* Arrow indicating movement */}
      <path
        d="M70 50 L85 50 M80 45 L85 50 L80 55"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-primary"
      />
    </svg>
  )
}

export default Logo

