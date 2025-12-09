/**
 * Reusable Section Wrapper Component
 * Provides consistent section spacing and layout
 * 
 * @param {string} title - Section title
 * @param {string} subtitle - Optional section subtitle
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Section content
 */
function SectionWrapper({ title, subtitle, className = '', children }) {
  console.log(`SectionWrapper rendered: ${title}`)
  
  return (
    <section className={`py-16 md:py-24 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12 animate-fade-in">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper

