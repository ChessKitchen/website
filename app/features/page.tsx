import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Search, Zap, Brain, Database, Puzzle, Shield, Monitor, Cog, BookOpen, Target, Layers, BarChart3, Crown, Sparkles, ChefHat, Coffee, Trophy, Star, Play, Download } from 'lucide-react'

export default function Features() {
  const mainFeatures = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Game Analysis',
      description: 'Import and analyze games from lichess.org and chess.com with powerful engine support.',
      details: [
        'Import games from PGN files or directly from online platforms',
        'Real-time engine analysis with multiple engines',
        'Detailed move evaluation and suggestions',
        'Annotation and comment system',
        'Export analysis to various formats'
      ],
      demo: true,
      accent: 'brand'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Multi-Engine Support',
      description: 'Analyze with any UCI-compatible engine for deep position analysis.',
      details: [
        'Support for all UCI-compatible engines',
        'Easy engine installation and management',
        'Parallel analysis with multiple engines',
        'Customizable engine settings and time controls',
        'Engine tournament and comparison features'
      ],
      accent: 'royal'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Repertoire Training',
      description: 'Build and train your opening repertoire using spaced repetition techniques.',
      details: [
        'Create custom opening repertoires',
        'Spaced repetition learning system',
        'Progress tracking and statistics',
        'Import repertoires from various sources',
        'Practice modes for white and black pieces'
      ],
      accent: 'sage'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Engine & Database Management',
      description: 'Install and manage engines and databases with minimal effort.',
      details: [
        'One-click engine installation',
        'Database import and management',
        'Automatic updates for engines and databases',
        'Cloud synchronization support',
        'Backup and restore functionality'
      ],
      accent: 'honey'
    },
    {
      icon: <Puzzle className="h-8 w-8" />,
      title: 'Position Search',
      description: 'Search for absolute or partial positions across your game database.',
      details: [
        'Advanced position search algorithms',
        'Partial position matching',
        'Pattern recognition and filtering',
        'Statistical analysis of positions',
        'Export search results'
      ],
      accent: 'brand'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cross-Platform',
      description: 'Available on Windows, macOS, and Linux with native performance.',
      details: [
        'Native applications for all major platforms',
        'Optimized performance on each OS',
        'Consistent user experience across platforms',
        'Platform-specific integrations',
        'Regular updates for all platforms'
      ],
      accent: 'royal'
    }
  ]

  const additionalFeatures = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Multiple Board Themes',
      description: 'Choose from various board and piece themes to customize your experience.',
      accent: 'brand'
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: 'Extensive Customization',
      description: 'Customize the interface, shortcuts, and behavior to match your preferences.',
      accent: 'royal'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Opening Explorer',
      description: 'Explore opening theory with detailed statistics and master games.',
      accent: 'sage'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Tactical Training',
      description: 'Solve puzzles and improve your tactical skills with built-in training modes.',
      accent: 'honey'
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: 'Game Tree Navigation',
      description: 'Navigate complex game variations with an intuitive tree interface.',
      accent: 'brand'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed statistics and performance metrics.',
      accent: 'royal'
    }
  ]

  const upcomingFeatures = [
    {
      emoji: '📱',
      title: 'Mobile Apps',
      description: 'Native iOS and Android applications for chess analysis on the go.',
      status: 'In Development'
    },
    {
      emoji: '🌐',
      title: 'Web Version',
      description: 'Browser-based version for instant access without installation.',
      status: 'Planned'
    },
    {
      emoji: '☁️',
      title: 'Cloud Sync',
      description: 'Synchronize your games and analysis across all devices.',
      status: 'Research'
    }
  ]

  return (
    <div className="min-h-screen bg-surface-primary">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-surface-primary via-brand-50/30 to-accent-royal-50/20 dark:from-gray-950 dark:via-brand-950/30 dark:to-accent-royal-950/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-brand-300 to-accent-honey-300 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-gradient-to-br from-accent-royal-300 to-accent-sage-300 rounded-full blur-3xl opacity-15 animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">♟</div>
        </div>

        <div className="container-brand relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full text-sm font-medium text-brand-700 dark:text-brand-300 animate-fade-in-up">
              <Crown className="h-4 w-4 fill-current" />
              <span>Comprehensive Features</span>
              <ChefHat className="h-4 w-4" />
            </div>

            {/* Enhanced Title */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h1 className="text-hero">
                <span className="block">Powerful Features for</span>
                <span className="block bg-gradient-to-r from-brand-600 via-accent-royal-600 to-accent-sage-600 bg-clip-text text-transparent font-bold">
                  Chess Mastery
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-lg text-text-secondary">
                <Coffee className="h-5 w-5 text-accent-espresso-500" />
                <span>Every Tool Crafted with Precision</span>
                <Sparkles className="h-5 w-5 text-accent-honey-500" />
              </div>
            </div>

            <p className="text-body-xl max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Discover all the tools and features that make Pawn Appétit the ultimate chess toolkit 
              for players of all levels. Every feature designed with the same care a chef puts into a perfect dish.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Main Features */}
      <section className="section-brand bg-gradient-to-b from-surface-secondary to-surface-primary dark:from-gray-900/50 dark:to-gray-950">
        <div className="container-brand">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 dark:bg-brand-900/30 rounded-full text-sm font-medium text-brand-700 dark:text-brand-300">
              <Trophy className="h-4 w-4" />
              <span>Core Features</span>
            </div>
            <h2 className="text-heading-xl text-text-primary">
              Everything you need for chess analysis, training, and improvement.
            </h2>
          </div>

          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col gap-12 lg:gap-20 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`flex items-center justify-center w-20 h-20 rounded-2xl text-white shadow-${feature.accent} ${
                      feature.accent === 'brand' ? 'bg-gradient-to-br from-brand-500 to-brand-600' :
                      feature.accent === 'royal' ? 'bg-gradient-to-br from-accent-royal-500 to-accent-royal-600' :
                      feature.accent === 'sage' ? 'bg-gradient-to-br from-accent-sage-500 to-accent-sage-600' :
                      'bg-gradient-to-br from-accent-honey-500 to-accent-honey-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-heading-lg text-text-primary">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-body-lg text-text-secondary mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-4">
                        <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                          feature.accent === 'brand' ? 'bg-brand-500' :
                          feature.accent === 'royal' ? 'bg-accent-royal-500' :
                          feature.accent === 'sage' ? 'bg-accent-sage-500' :
                          'bg-accent-honey-500'
                        }`} />
                        <span className="text-body text-text-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.demo && (
                    <button className={`btn ${
                      feature.accent === 'brand' ? 'btn-brand' :
                      feature.accent === 'royal' ? 'btn-royal' :
                      feature.accent === 'sage' ? 'btn-sage' :
                      'btn-brand'
                    } group`}>
                      <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span>Try Interactive Demo</span>
                    </button>
                  )}
                </div>
                <div className="flex-1 animate-fade-in-scale" style={{ animationDelay: `${index * 200 + 100}ms` }}>
                  <div className="card-feature p-8 h-full">
                    <div className="aspect-video bg-gradient-to-br from-surface-secondary to-surface-tertiary dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      {/* Decorative background */}
                      <div className="absolute inset-0 chess-pattern opacity-10"></div>
                      <div className="relative text-center z-10">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-${feature.accent} ${
                          feature.accent === 'brand' ? 'bg-gradient-to-br from-brand-500 to-brand-600' :
                          feature.accent === 'royal' ? 'bg-gradient-to-br from-accent-royal-500 to-accent-royal-600' :
                          feature.accent === 'sage' ? 'bg-gradient-to-br from-accent-sage-500 to-accent-sage-600' :
                          'bg-gradient-to-br from-accent-honey-500 to-accent-honey-600'
                        }`}>
                          {feature.icon}
                        </div>
                        <p className="text-text-secondary font-medium">
                          {feature.title} Interface
                        </p>
                        <p className="text-text-tertiary text-sm mt-2">
                          Screenshots coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Additional Features */}
      <section className="section-brand bg-gradient-to-b from-surface-primary to-surface-secondary dark:from-gray-950 dark:to-gray-900/50">
        <div className="container-brand">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-sage-100 dark:bg-accent-sage-900/30 rounded-full text-sm font-medium text-accent-sage-700 dark:text-accent-sage-300">
              <Sparkles className="h-4 w-4" />
              <span>Additional Features</span>
            </div>
            <h2 className="text-heading-xl text-text-primary">
              Even more tools to enhance your chess experience.
            </h2>
          </div>

          <div className="grid-features">
            {additionalFeatures.map((feature, index) => (
              <div key={feature.title} className="card-feature p-8 group animate-fade-in-scale" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-6 mb-6">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl shadow-soft group-hover:scale-110 transition-all duration-300 ${
                    feature.accent === 'brand' ? 'bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/30 dark:to-brand-800/30 text-brand-600 dark:text-brand-400' :
                    feature.accent === 'royal' ? 'bg-gradient-to-br from-accent-royal-100 to-accent-royal-200 dark:from-accent-royal-900/30 dark:to-accent-royal-800/30 text-accent-royal-600 dark:text-accent-royal-400' :
                    feature.accent === 'sage' ? 'bg-gradient-to-br from-accent-sage-100 to-accent-sage-200 dark:from-accent-sage-900/30 dark:to-accent-sage-800/30 text-accent-sage-600 dark:text-accent-sage-400' :
                    'bg-gradient-to-br from-accent-honey-100 to-accent-honey-200 dark:from-accent-honey-900/30 dark:to-accent-honey-800/30 text-accent-honey-600 dark:text-accent-honey-400'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-heading-md text-text-primary group-hover:text-brand-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-body text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Coming Soon Features */}
      <section className="section-brand bg-gradient-to-b from-surface-secondary to-surface-primary dark:from-gray-900/50 dark:to-gray-950">
        <div className="container-brand">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-honey-100 dark:bg-accent-honey-900/30 rounded-full text-sm font-medium text-accent-honey-700 dark:text-accent-honey-300">
              <Star className="h-4 w-4" />
              <span>Coming Soon</span>
            </div>
            <h2 className="text-heading-xl text-text-primary">
              The Future of Chess Analysis
            </h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              We're constantly working on new features to improve your chess experience.
              Here's what's cooking in our kitchen.
            </p>
          </div>

          <div className="grid-features">
            {upcomingFeatures.map((feature, index) => (
              <div key={feature.title} className="card-brand p-8 border-dashed opacity-80 hover:opacity-100 transition-opacity duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-center space-y-4">
                  <div className="text-6xl">{feature.emoji}</div>
                  <div className="space-y-2">
                    <h3 className="text-heading-md text-text-primary">
                      {feature.title}
                    </h3>
                    <div className="inline-flex items-center px-3 py-1 bg-accent-honey-100 dark:bg-accent-honey-900/30 rounded-full text-xs font-medium text-accent-honey-700 dark:text-accent-honey-300">
                      {feature.status}
                    </div>
                  </div>
                  <p className="text-body text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-600 via-accent-royal-600 to-brand-700 text-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-128 h-128 bg-accent-sage-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">♟</div>
        </div>
        
        <div className="container-brand relative text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-heading-xl">
              Ready to explore all features?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Download Pawn Appétit and experience the full power of modern chess analysis.
              Every feature crafted with the precision of a master chef.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/install"
              className="btn btn-glass group text-lg px-8 py-4"
            >
              <Download className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Download Now</span>
            </a>
            <a
              href="/docs"
              className="btn btn-outline group text-lg px-8 py-4 border-white/30 text-white hover:bg-white hover:text-brand-600"
            >
              <BookOpen className="h-6 w-6" />
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
