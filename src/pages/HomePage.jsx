import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/Card'
import SectionWrapper from '../components/SectionWrapper'
import Gallery from '../components/Gallery'

/**
 * Home Page Component
 * Main landing page with all sections: Hero, Services, Why Choose Us, Testimonials, CTA
 */
function HomePage() {
  console.log('HomePage component rendered')
  
  // Services data
  const services = [
    {
      id: 1,
      title: 'Home Moving',
      description: 'Professional residential moving services with care and precision. We handle your belongings as if they were our own.',
      icon: '🏠'
    },
    {
      id: 2,
      title: 'Office Relocation',
      description: 'Minimize downtime with our efficient office relocation services. We ensure your business operations continue smoothly.',
      icon: '🏢'
    },
    {
      id: 3,
      title: 'Rubble Removal',
      description: 'Quick and efficient removal of construction debris and rubble. We dispose of materials responsibly.',
      icon: '🧱'
    },
    {
      id: 4,
      title: 'General Hauling',
      description: 'Need to move large items? Our general hauling services cover everything from furniture to equipment.',
      icon: '🚚'
    },
    {
      id: 5,
      title: 'Building Waste Removal & Disposal',
      description: 'Comprehensive waste removal services for construction and renovation projects. Environmentally responsible disposal.',
      icon: '♻️'
    },
    {
      id: 6,
      title: 'Heavy Equipment Transport',
      description: 'Specialized transport for heavy machinery and equipment. We have the expertise and equipment to handle it safely.',
      icon: '⚙️'
    }
  ]
  
  // Why Choose Us reasons
  const reasons = [
    {
      id: 1,
      title: 'Reliable & On-Time',
      description: 'We understand the importance of punctuality. Count on us to arrive on time, every time.',
      icon: '⏰'
    },
    {
      id: 2,
      title: 'Professional Team',
      description: 'Our trained professionals bring years of experience and expertise to every job.',
      icon: '👔'
    },
    {
      id: 3,
      title: 'Affordable Pricing',
      description: 'Transparent, competitive pricing with no hidden fees. Quality service that fits your budget.',
      icon: '💰'
    },
    {
      id: 4,
      title: 'Secure Handling',
      description: 'Professional handling ensures your belongings are protected throughout the entire process.',
      icon: '🛡️'
    },
    {
      id: 5,
      title: 'Fast Turnaround',
      description: 'Efficient processes and dedicated teams ensure quick completion without compromising quality.',
      icon: '⚡'
    },
    {
      id: 6,
      title: 'Excellent Customer Support',
      description: 'Our customer service team is available to assist you every step of the way.',
      icon: '💬'
    }
  ]
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 px-4 md:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Background Image - Warehouse theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center'
          }}
        ></div>
        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="relative max-w-7xl mx-auto w-full z-10">
          {/* Top tag */}
          <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-sm font-medium">Professional Moving & Disposal Services</span>
          </div>
          
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-slide-up">
              We Move <span className="text-blue-400">Everything.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-gray-100 leading-relaxed animate-slide-up">
              From furniture relocations to building rubble disposal — Load Movers delivers reliable, professional hauling services you can count on.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="mb-16 animate-slide-up">
            <Button variant="primary" to="/quote" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Get Free Quote →
            </Button>
          </div>
          
          {/* Stats Counters */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 animate-slide-up">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg md:text-xl text-gray-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
              <div className="text-lg md:text-xl text-gray-200">Jobs Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg md:text-xl text-gray-200">Based in Cape Town</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <SectionWrapper 
        title="Our Services" 
        subtitle="Comprehensive moving and logistics solutions tailored to your needs"
        className="bg-gray-50"
        id="services"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="text-center hover:border-primary border-2 border-transparent transition-smooth animate-slide-up bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button variant="primary" to="/quote" className="w-full">
                Get Quote
              </Button>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Why Choose Us Section */}
      <SectionWrapper 
        title="Why Choose Us" 
        subtitle="What sets Load Movers apart from the competition"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Paragraph */}
          <div className="lg:sticky lg:top-24">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Moving Partner
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Load Movers, we understand that moving is more than just transporting items from one place to another. It's about trust, reliability, and peace of mind. With years of experience in the industry, we've built a reputation for excellence that speaks for itself.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our commitment to customer satisfaction drives everything we do. From the moment you request a quote to the final delivery, we ensure a seamless experience that exceeds expectations. Whether you're moving your home, relocating your office, or transporting heavy equipment, our professional team is equipped to handle it all.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Choose Load Movers for a moving experience that's stress-free, efficient, and affordable. We're not just moving your belongings—we're moving your life forward.
            </p>
          </div>
          
          {/* Right side - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {reasons.map((reason, index) => (
              <Card 
                key={reason.id}
                className="hover:border-primary border-2 border-transparent transition-smooth animate-slide-up bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>
      
      {/* Gallery Section */}
      <SectionWrapper 
        title="Our Work in Action" 
        subtitle="See Load Movers in action - from furniture moves to construction hauling"
        className="bg-gray-50"
        id="gallery"
      >
        <Gallery />
      </SectionWrapper>
      
      {/* CTA Section */}
      <section className="bg-blue-600 py-16 md:py-20 px-4 md:px-8 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - CTA Text */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Move? Let's Get Started.
              </h2>
              <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed">
                Whether it's a small load or a big project, we're here to help. Get your free quote today and experience the Load Movers difference.
              </p>
              <Button 
                to="/quote" 
                className="bg-blue-700 text-white hover:bg-blue-50 text-lg font-bold px-8 py-4 shadow-lg border-2 border-white"
              >
                Get Your Free Quote →
              </Button>
            </div>
            
            {/* Right Side - Contact Panel */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Us Directly</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/80 text-sm mb-1">Call Us</div>
                    <a href="tel:+27847571656" className="text-white font-semibold text-lg hover:text-blue-200 transition-smooth block">+27 847 571 656</a>
                    <a href="tel:+27639697618" className="text-white font-semibold text-lg hover:text-blue-200 transition-smooth block">+27 639 697 618</a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/80 text-sm mb-1">Email Us</div>
                    <a href="mailto:info@loadmoversltd.co.za" className="text-white font-semibold text-lg hover:text-blue-200 transition-smooth block">info@loadmoversltd.co.za</a>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/80 text-sm mb-1">Visit Us</div>
                    <div className="text-white font-semibold text-lg">207 Kings Road, Brooklyn, Cape Town</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default HomePage

