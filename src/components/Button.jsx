import { Link } from 'react-router-dom'

/**
 * Reusable Button Component
 * Supports both button and link variants with different styles
 * 
 * @param {string} variant - 'primary' | 'outline' | 'transparent'
 * @param {string} to - Optional route path for Link variant
 * @param {function} onClick - Optional click handler
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Button content
 */
function Button({ variant = 'primary', to, onClick, className = '', children, type = 'button' }) {
  console.log(`Button rendered with variant: ${variant}`)
  
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold text-base transition-smooth transform hover:scale-105 active:scale-95'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    transparent: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary'
  }
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`
  
  // If 'to' prop is provided, render as Link
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    )
  }
  
  // Otherwise render as button
  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}

export default Button

