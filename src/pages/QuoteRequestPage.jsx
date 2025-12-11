import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Logo from '../components/Logo'

/**
 * Quote Request Page Component
 * Form for users to request a service quote
 * Matches the design from provided images
 */
function QuoteRequestPage() {
  console.log('QuoteRequestPage component rendered')
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    pickupLocation: '',
    dropOffLocation: '',
    additionalDetails: ''
  })
  
  // Success modal state
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Service options
  const serviceOptions = [
    'Home Moving',
    'Office Relocation',
    'Rubble Removal',
    'General Hauling',
    'Building Waste Removal & Disposal',
    'Heavy Equipment Transport'
  ]
  
  /**
   * Handle input change
   */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    console.log(`Form field updated: ${name} = ${value}`)
  }
  
  /**
   * Send email using mailto link
   * In production, this should use a backend API or service like EmailJS
   */
  const sendEmail = () => {
    const subject = `New Quote Request - ${formData.serviceType || 'General Service'}`
    const body = `New Quote Request Received

Contact Information:
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Details:
- Type of Service: ${formData.serviceType}
- Preferred Date: ${formData.preferredDate}

Location Details:
- Pickup Location: ${formData.pickupLocation}
- Drop-off / Disposal Location: ${formData.dropOffLocation}

Additional Details:
${formData.additionalDetails}

---
This email was sent from the Load Movers quote request form.`

    // Create mailto link
    const mailtoLink = `mailto:info@loadmoversltd.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Also log to console for development
    console.log('Email details:', { subject, body })
  }
  
  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData)
    
    setIsSubmitting(true)
    
    try {
      // Send email
      sendEmail()
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setShowSuccess(true)
      console.log('Quote request submitted successfully')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: '',
          preferredDate: '',
          pickupLocation: '',
          dropOffLocation: '',
          additionalDetails: ''
        })
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  /**
   * Close success modal
   */
  const closeSuccess = () => {
    setShowSuccess(false)
    console.log('Success modal closed')
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Dark Blue */}
      <header className="bg-blue-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back to Home Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-smooth mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          {/* Logo and Company Name */}
          <div className="flex items-center gap-4 mb-6">
            <Logo size="lg" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Load Movers</h1>
              <p className="text-sm md:text-base text-white/80">Pvt Ltd</p>
            </div>
          </div>
          
          {/* Page Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Request a Quote
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Fill out the form below and we'll get back to you with a competitive quote.
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth bg-white text-gray-900 placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth bg-white text-gray-900 placeholder-gray-400"
                        placeholder="+263 77 123 4567"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth bg-white text-gray-900 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                {/* Service Details Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Service Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Type of Service <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth bg-white text-gray-900 appearance-none pr-10"
                        >
                          <option value="">Select service type</option>
                          {serviceOptions.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth bg-white text-gray-900 pr-10"
                          placeholder="yyyy/mm/dd"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Location Details Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Location Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="pickupLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth bg-white text-gray-900 placeholder-gray-400"
                        placeholder="Full address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dropOffLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                        Drop-off / Disposal Location
                      </label>
                      <input
                        type="text"
                        id="dropOffLocation"
                        name="dropOffLocation"
                        value={formData.dropOffLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth bg-white text-gray-900 placeholder-gray-400"
                        placeholder="Full address"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Additional Details Section */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Details</h3>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Describe what you need moved, approximate weight/volume, access conditions, etc."
                  />
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full text-lg py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Need Immediate Help Card */}
            <div className="bg-blue-900 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">Need Immediate Help?</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <a href="tel:+27847571656" className="text-white/90 hover:text-white transition-smooth block">+27 847 571 656</a>
                    <a href="tel:+27639697618" className="text-white/90 hover:text-white transition-smooth block">+27 639 697 618</a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <a href="mailto:info@loadmoversltd.co.za" className="text-white/90 hover:text-white transition-smooth">
                      info@loadmoversltd.co.za
                    </a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Visit Us</div>
                    <div className="text-white/90">207 Kings Road, Brooklyn, Cape Town</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What Happens Next Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
              <div className="space-y-4">
                {[
                  { number: 1, text: "We review your request within 2-4 hours" },
                  { number: 2, text: "Our team contacts you to clarify details" },
                  { number: 3, text: "You receive a detailed, no-obligation quote" },
                  { number: 4, text: "Confirm booking and we handle the rest!" }
                ].map((step) => (
                  <div key={step.number} className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <p className="text-gray-700 pt-1">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center animate-slide-up">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quote Request Submitted!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your request. Our team will review your information and get back to you within 2-4 hours with a competitive quote.
            </p>
            <Button 
              variant="primary" 
              onClick={closeSuccess}
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}

export default QuoteRequestPage
