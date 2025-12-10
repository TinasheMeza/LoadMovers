import { useState, useEffect } from 'react'

/**
 * Gallery Component
 * Carousel gallery displaying business photos with navigation
 */
function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState({})

  // Gallery images - images are in public/images/ folder
  const images = [
    {
      id: 1,
      src: '/images/gallery-1.jpeg',
      alt: 'IM LOAD MOVERS truck at apartment building'
    },
    {
      id: 2,
      src: '/images/gallery-2.jpeg',
      alt: 'LOAD MOVERS truck with furniture in residential area'
    },
    {
      id: 3,
      src: '/images/gallery-3.jpeg',
      alt: 'LOAD MOVERS truck loaded with household items'
    },
    {
      id: 4,
      src: '/images/gallery-4.jpeg',
      alt: 'Orange pickup truck'
    },
    {
      id: 5,
      src: '/images/gallery-5.jpeg',
      alt: 'LOAD MOVERS truck at construction supply yard'
    },
    {
      id: 6,
      src: '/images/gallery-6.jpeg',
      alt: 'LM LOAD MOVERS truck at Arenzo 2 apartment building'
    },
    {
      id: 7,
      src: '/images/gallery-7.jpeg',
      alt: 'LOAD MOVERS truck fully loaded with household items'
    },
    {
      id: 8,
      src: '/images/gallery-8.jpeg',
      alt: 'LOAD MOVERS truck with compressed materials'
    }
  ]

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }))
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [images.length])

  return (
    <div className="relative w-full max-w-6xl mx-auto lg:w-3/5 lg:max-w-none">
      {/* Main Image Container */}
      <div className="relative aspect-video md:aspect-[16/10] rounded-lg overflow-hidden bg-gray-200 shadow-xl">
        {imageErrors[images[currentIndex].id] ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium">{images[currentIndex].alt}</p>
              <p className="text-xs mt-1 text-gray-400">Image not found: {images[currentIndex].src}</p>
            </div>
          </div>
        ) : (
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
            onError={() => handleImageError(images[currentIndex].id)}
          />
        )}

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex
                ? 'border-blue-600 ring-2 ring-blue-300 scale-105'
                : 'border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100'
            }`}
            aria-label={`Go to image ${index + 1}`}
          >
            {imageErrors[image.id] ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-xs text-center p-1">
                <span className="truncate">{image.alt}</span>
              </div>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={() => handleImageError(image.id)}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Gallery

