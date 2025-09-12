import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Cpu, Download, AlertTriangle, CheckCircle, Info, Wrench, Monitor } from 'lucide-react'

export default function EngineManagement() {
  const supportedEngines = [
    {
      name: 'Stockfish',
      version: '17.1',
      strength: '3635 ELO',
      description: 'The world\'s strongest open-source chess engine',
      features: ['Neural network evaluation', 'Multi-threaded analysis', 'Syzygy tablebase support'],
      platforms: ['Windows', 'macOS', 'Linux'],
      installation: 'Auto-download or package manager',
      recommended: true
    },
    {
      name: 'Leela Chess Zero (LC0)',
      version: '0.30.0',
      strength: '3440 ELO',
      description: 'Neural network-based engine inspired by AlphaZero',
      features: ['Deep learning evaluation', 'GPU acceleration', 'Unique positional understanding'],
      platforms: ['Windows', 'macOS', 'Linux'],
      installation: 'Package manager recommended',
      recommended: true
    },
    {
      name: 'Dragon by Komodo',
      version: '1.0',
      strength: '3533 ELO',
      description: 'Commercial engine with excellent positional understanding',
      features: ['Multi-CPU optimization', 'Advanced evaluation', 'Opening book integration'],
      platforms: ['Windows', 'macOS', 'Linux'],
      installation: 'Manual download',
      recommended: false
    },
    {
      name: 'RubiChess',
      version: '20240817',
      strength: '3600 ELO',
      description: 'Modern engine with excellent tactical abilities',
      features: ['Fast calculation', 'Advanced pruning', 'Multi-PV analysis'],
      platforms: ['Windows', 'Linux'],
      installation: 'Manual download',
      recommended: false
    }
  ]

  const installationMethods = [
    {
      title: 'Automatic Download',
      icon: <Download className="h-8 w-8" />,
      description: 'Let Pawn Appétit download and configure engines for you',
      steps: [
        'Go to Engines page and click "Add Engine"',
        'Choose from the list of available engines',
        'Click "Download" next to your preferred engine',
        'Wait for download and automatic configuration',
        'Engine will be ready to use immediately'
      ],
      platforms: 'All platforms',
      difficulty: 'Beginner',
      recommended: true
    },
    {
      title: 'Package Manager',
      icon: <Cpu className="h-8 w-8" />,
      description: 'Install engines using your system\'s package manager',
      steps: [
        'Open terminal/command prompt',
        'Install using package manager (e.g., "brew install stockfish" on macOS)',
        'In Pawn Appétit, click "Add Engine" → "Browse"',
        'Navigate to the engine executable path',
        'Click "Add" to register the engine'
      ],
      platforms: 'macOS (Homebrew), Linux (apt/yum)',
      difficulty: 'Intermediate',
      recommended: false
    },
    {
      title: 'Manual Installation',
      icon: <Wrench className="h-8 w-8" />,
      description: 'Download and configure engines manually',
      steps: [
        'Download engine from official website',
        'Extract files to a permanent location',
        'In Pawn Appétit, click "Add Engine" → "Browse"',
        'Select the engine executable file',
        'Configure engine settings as needed'
      ],
      platforms: 'All platforms',
      difficulty: 'Advanced',
      recommended: false
    }
  ]

  const engineSettings = [
    {
      setting: 'Hash Size',
      description: 'Memory allocated for the engine\'s transposition table',
      recommendation: '25-50% of your total RAM',
      impact: 'Higher values improve analysis strength, especially in longer analyses',
      examples: [
        '4GB RAM → 1024-2048 MB Hash',
        '8GB RAM → 2048-4096 MB Hash',
        '16GB RAM → 4096-8192 MB Hash'
      ]
    },
    {
      setting: 'Threads',
      description: 'Number of CPU cores the engine can use',
      recommendation: 'Match your CPU core count',
      impact: 'More threads = faster analysis, but diminishing returns after physical cores',
      examples: [
        '4-core CPU → 4 threads',
        '8-core CPU → 8 threads',
        '16-core CPU → 12-16 threads'
      ]
    },
    {
      setting: 'MultiPV',
      description: 'Number of best moves to show simultaneously',
      recommendation: '3-5 for analysis, 1 for games',
      impact: 'Higher values show more options but slow down analysis',
      examples: [
        'Analysis → 3-5 lines',
        'Tournament prep → 1-2 lines',
        'Learning → 5-10 lines'
      ]
    },
    {
      setting: 'Skill Level',
      description: 'Artificial strength limitation (Stockfish only)',
      recommendation: '20 (maximum) for analysis',
      impact: 'Lower values make engine play weaker moves for practice',
      examples: [
        'Beginner practice → 5-10',
        'Intermediate practice → 10-15',
        'Analysis → 20 (max)'
      ]
    }
  ]

  const troubleshootingGuide = [
    {
      problem: 'Engine not responding',
      symptoms: ['Analysis doesn\'t start', 'Engine shows as "disconnected"', 'No move suggestions'],
      solutions: [
        'Check if engine file exists and is executable',
        'Verify engine path in settings',
        'Restart Pawn Appétit',
        'Try reducing Hash size if system is low on memory',
        'Check antivirus software isn\'t blocking the engine'
      ]
    },
    {
      problem: 'Slow analysis',
      symptoms: ['Analysis takes very long', 'Engine seems stuck', 'Low depth reached'],
      solutions: [
        'Increase Hash size (more memory)',
        'Increase Threads (use more CPU cores)',
        'Close other resource-intensive applications',
        'Check if engine supports your CPU architecture (BMI2)',
        'Consider switching to a faster engine'
      ]
    },
    {
      problem: 'Installation fails',
      symptoms: ['Download errors', 'Can\'t find executable', 'Permission denied'],
      solutions: [
        'Check internet connection for downloads',
        'Run Pawn Appétit as administrator (Windows)',
        'Verify file permissions (Linux/macOS)',
        'Temporarily disable antivirus during installation',
        'Try manual installation method'
      ]
    },
    {
      problem: 'Engine crashes',
      symptoms: ['Sudden analysis stops', 'Error messages', 'Engine restarts frequently'],
      solutions: [
        'Reduce Hash size to prevent memory issues',
        'Update to latest engine version',
        'Check system stability (RAM test)',
        'Verify engine compatibility with your OS',
        'Try alternative engine as backup'
      ]
    }
  ]

  const comparisonFeatures = [
    {
      feature: 'Multiple Engine Analysis',
      description: 'Compare evaluations from different engines simultaneously',
      usage: 'Add multiple engines and enable them all for analysis'
    },
    {
      feature: 'Engine Tournaments',
      description: 'Let engines play against each other to compare strength',
      usage: 'Set up engine vs engine games with time controls'
    },
    {
      feature: 'Consensus Analysis',
      description: 'Get agreement between engines on best moves',
      usage: 'Look for moves suggested by multiple engines'
    },
    {
      feature: 'Specialized Engines',
      description: 'Use different engines for different purposes',
      usage: 'Stockfish for tactics, LC0 for positional understanding'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Engine Management
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Guide
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Master the setup, configuration, and optimization of chess engines in Pawn Appétit. 
              From automatic installation to advanced tuning.
            </p>
          </div>
        </div>
      </section>

      {/* Supported Engines */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Supported Chess Engines
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Pawn Appétit supports all UCI-compatible engines. Here are some of the most popular options.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {supportedEngines.map((engine, index) => (
              <div key={index} className={`card p-8 ${engine.recommended ? 'ring-2 ring-primary-500' : ''}`}>
                {engine.recommended && (
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">Recommended</span>
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg text-white">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {engine.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-500 dark:text-gray-400">v{engine.version}</span>
                      <span className="text-sm font-medium text-primary-600">{engine.strength}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">{engine.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {engine.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Platforms: </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{engine.platforms.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{engine.installation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Methods */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Installation Methods
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Choose the installation method that best fits your technical comfort level.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {installationMethods.map((method, index) => (
              <div key={index} className={`card p-8 ${method.recommended ? 'ring-2 ring-green-500' : ''}`}>
                {method.recommended && (
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">Recommended for Beginners</span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {method.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Steps:</h4>
                  <ol className="space-y-2">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-5 h-5 bg-primary-600 text-white rounded-full text-xs font-medium flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Platforms:</span>
                    <span className="text-gray-700 dark:text-gray-300">{method.platforms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Difficulty:</span>
                    <span className={`font-medium ${
                      method.difficulty === 'Beginner' ? 'text-green-600' :
                      method.difficulty === 'Intermediate' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {method.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engine Configuration */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Engine Configuration
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Optimize engine settings for your hardware and analysis needs.
            </p>
          </div>

          <div className="space-y-12">
            {engineSettings.map((setting, index) => (
              <div key={index} className="card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {setting.setting}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {setting.description}
                    </p>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                        Recommendation
                      </h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm">
                        {setting.recommendation}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Impact:</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {setting.impact}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Info className="h-4 w-4" />
                      <span>Adjust based on your system specifications</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {setting.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engine Comparison */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Multiple Engine Analysis
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Use multiple engines simultaneously to get different perspectives on positions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {comparisonFeatures.map((feature, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg text-white flex-shrink-0">
                    <Monitor className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.feature}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {feature.description}
                    </p>
                    <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                      <p className="text-green-800 dark:text-green-200 text-sm">
                        <strong>How to use:</strong> {feature.usage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Troubleshooting Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Common engine problems and their solutions.
            </p>
          </div>

          <div className="space-y-8">
            {troubleshootingGuide.map((issue, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-lg text-white flex-shrink-0">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {issue.problem}
                    </h3>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Symptoms:</h4>
                      <ul className="flex flex-wrap gap-2">
                        {issue.symptoms.map((symptom, symptomIndex) => (
                          <li key={symptomIndex} className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm">
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Solutions to try:</h4>
                  <ol className="space-y-3">
                    {issue.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                          {solutionIndex + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need More Help?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Join our community for engine configuration tips and advanced analysis techniques.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://discord.gg/8hk49G8ZbX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Join Discord Community
              </a>
              <a
                href="/docs/faq"
                className="text-white hover:text-primary-100 font-medium"
              >
                View FAQ <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}