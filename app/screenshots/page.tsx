'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Download, ExternalLink, Maximize2 } from 'lucide-react'
import { useState } from 'react'

export default function Screenshots() {
  const [activeCategory, setActiveCategory] = useState('all')

  const screenshots = [
    {
      title: 'Dashboard Page',
      description: 'Main dashboard with quick access to all features and recent activities.',
      filename: 'dashboard-page.png',
      category: 'Interface'
    },
    {
      title: 'Game Analysis',
      description: 'Analyze your games with powerful engine support and detailed evaluations.',
      filename: 'game-page.png',
      category: 'Analysis'
    },
    {
      title: 'Position Analysis',
      description: 'Deep position analysis with multiple engine evaluations and suggestions.',
      filename: 'analyze-page.png',
      category: 'Analysis'
    },
    {
      title: 'Repertoire Training',
      description: 'Build and practice your opening repertoire with spaced repetition.',
      filename: 'learn-page.png',
      category: 'Training'
    },
    {
      title: 'Practice Mode',
      description: 'Practice your openings and test your knowledge against the computer.',
      filename: 'practice-page.png',
      category: 'Training'
    },
    {
      title: 'Keyboard Shortcuts',
      description: 'Comprehensive keyboard shortcuts for efficient navigation and control.',
      filename: 'keybindings-page.png',
      category: 'Settings'
    },
    {
      title: 'Application Settings',
      description: 'Customize the application behavior, appearance, and preferences.',
      filename: 'settings-page.png',
      category: 'Settings'
    }
  ]

  const filteredScreenshots = activeCategory === 'all' 
    ? screenshots 
    : screenshots.filter(screenshot => screenshot.category === activeCategory)

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Interface', value: 'Interface' },
    { name: 'Analysis', value: 'Analysis' },
    { name: 'Training', value: 'Training' },
    { name: 'Settings', value: 'Settings' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Screenshots &amp;
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Visual Tour
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Explore Pawn Appétit&apos;s clean, intuitive interface and powerful features 
              through these screenshots and visual examples.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/install"
                className="btn-primary flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Try It Yourself</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredScreenshots.map((screenshot, index) => (
              <div key={screenshot.filename} className="group relative">
                <div className="card p-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden relative">
                    {/* Actual screenshot */}
                    <img
                      src={`/assets/${screenshot.filename}`}
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {screenshot.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                        {screenshot.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Interface Highlights
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover what makes Pawn Appétit&apos;s interface special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Clean Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Minimalist interface that focuses on what matters most - your chess analysis and improvement.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Responsive Layout
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adapts beautifully to different screen sizes and resolutions for optimal viewing experience.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Fast Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with modern technologies for smooth animations and lightning-fast interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              See It in Action
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Watch Pawn Appétit in action with this quick demonstration video.
            </p>
          </div>
          
          <div className="card p-8">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Demo Video Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to experience it yourself?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Download Pawn Appétit and see how it can transform your chess analysis workflow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/install"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download Free</span>
              </a>
              <a
                href="/features"
                className="text-white hover:text-primary-100 font-medium"
              >
                Learn about features <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
