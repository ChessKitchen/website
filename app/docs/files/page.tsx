import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { FileText, BookOpen, Trophy, Target, FolderOpen, Upload, Download, Search, Edit, Trash2, Copy, Share2, Star, Archive, Filter } from 'lucide-react'

export default function FilesDocumentation() {
  const fileTypes = [
    {
      title: 'Game Files',
      icon: <FileText className="h-8 w-8" />,
      description: 'Individual chess games with moves, annotations, and analysis',
      formats: ['PGN', 'CBF', 'ChessBase'],
      features: [
        'Complete game notation with variations',
        'Player information and ratings',
        'Tournament and event metadata',
        'Engine analysis and annotations',
        'Time stamps and clock information',
        'Custom comments and symbols'
      ],
      useCases: [
        'Analyzing your played games',
        'Studying master games',
        'Preparing for opponents',
        'Creating game collections'
      ]
    },
    {
      title: 'Repertoire Files',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Opening repertoires with move trees and training sequences',
      formats: ['REP', 'PGN with variations', 'Custom format'],
      features: [
        'Move tree visualization',
        'Spaced repetition training',
        'Success rate tracking',
        'Alternative line management',
        'Color-coded move quality',
        'Personal notes and annotations'
      ],
      useCases: [
        'Building opening repertoires',
        'Training opening sequences',
        'Preparing for tournaments',
        'Studying theoretical lines'
      ]
    },
    {
      title: 'Tournament Files',
      icon: <Trophy className="h-8 w-8" />,
      description: 'Tournament management with pairings, results, and standings',
      formats: ['TRF', 'Swiss-Manager', 'Custom format'],
      features: [
        'Player registration and ratings',
        'Automatic pairing generation',
        'Round management and results',
        'Live standings and statistics',
        'Tiebreak calculations',
        'Export to FIDE reporting'
      ],
      useCases: [
        'Organizing local tournaments',
        'Managing club events',
        'Training tournament formats',
        'Analyzing tournament performance'
      ]
    },
    {
      title: 'Puzzle Files',
      icon: <Target className="h-8 w-8" />,
      description: 'Tactical puzzle collections with solutions and themes',
      formats: ['PUZ', 'PGN with puzzles', 'Custom format'],
      features: [
        'Themed puzzle collections',
        'Difficulty rating system',
        'Solution tracking and timing',
        'Progress statistics',
        'Custom puzzle creation',
        'Spaced repetition for failed puzzles'
      ],
      useCases: [
        'Tactical training sessions',
        'Pattern recognition practice',
        'Competition preparation',
        'Teaching chess tactics'
      ]
    }
  ]

  const fileOperations = [
    {
      title: 'Creating Files',
      icon: <Edit className="h-8 w-8" />,
      description: 'Start new chess files from scratch or templates',
      steps: [
        'Click "New File" in the Files section',
        'Choose file type (Game, Repertoire, Tournament, Puzzle)',
        'Select from templates or start blank',
        'Add initial content and metadata',
        'Save with descriptive filename'
      ],
      tips: [
        'Use descriptive names with dates',
        'Choose appropriate file type for your needs',
        'Fill in metadata for better organization',
        'Consider starting from existing templates'
      ]
    },
    {
      title: 'Importing Files',
      icon: <Upload className="h-8 w-8" />,
      description: 'Import chess files from various sources and formats',
      steps: [
        'Click "Import" or drag files into Pawn Appétit',
        'Select single files or entire folders',
        'Choose import settings and format options',
        'Review and confirm imported content',
        'Organize files into appropriate folders'
      ],
      tips: [
        'Batch import multiple files at once',
        'Check encoding for international characters',
        'Verify game data after import',
        'Organize immediately after import'
      ]
    },
    {
      title: 'Managing Files',
      icon: <FolderOpen className="h-8 w-8" />,
      description: 'Organize, search, and maintain your chess file collection',
      steps: [
        'Create folder structure for organization',
        'Use search and filter tools to find files',
        'Edit metadata and add custom tags',
        'Move files between folders as needed',
        'Regular backup and maintenance'
      ],
      tips: [
        'Create logical folder hierarchies',
        'Use consistent naming conventions',
        'Tag files with relevant keywords',
        'Regular cleanup of duplicate files'
      ]
    }
  ]

  const organizationTips = [
    {
      category: 'Folder Structure',
      icon: <FolderOpen className="h-6 w-6" />,
      suggestions: [
        'By Player: Organize games by opponent or famous players',
        'By Opening: Group files by opening systems',
        'By Time Period: Arrange chronologically by year/month',
        'By Event: Separate tournament and casual games',
        'By Study Topic: Group training materials by theme'
      ]
    },
    {
      category: 'Naming Conventions',
      icon: <FileText className="h-6 w-6" />,
      suggestions: [
        'Include dates: YYYY-MM-DD format for sorting',
        'Player names: LastName_FirstName format',
        'Event info: Tournament name and round',
        'Version numbers: For updated analysis',
        'Descriptive suffixes: _analyzed, _repertoire, etc.'
      ]
    },
    {
      category: 'Metadata Management',
      icon: <Edit className="h-6 w-6" />,
      suggestions: [
        'Add comprehensive tags for searchability',
        'Include player ratings when available',
        'Note analysis engine and depth used',
        'Mark incomplete or work-in-progress files',
        'Rate file importance with star system'
      ]
    }
  ]

  const advancedFeatures = [
    {
      title: 'File Synchronization',
      description: 'Keep files synchronized across devices and platforms',
      features: [
        'Cloud storage integration',
        'Automatic backup scheduling',
        'Conflict resolution for simultaneous edits',
        'Offline access with sync when connected'
      ]
    },
    {
      title: 'Collaboration Tools',
      description: 'Share and collaborate on chess files with others',
      features: [
        'File sharing with download links',
        'Collaborative editing for repertoires',
        'Comment and annotation sharing',
        'Team tournament management'
      ]
    },
    {
      title: 'Export & Publishing',
      description: 'Export files in various formats for different purposes',
      features: [
        'Export to standard PGN format',
        'Generate web-friendly study links',
        'Create printable study materials',
        'Export to online platform formats'
      ]
    },
    {
      title: 'Automation & Scripts',
      description: 'Automate file management tasks and workflows',
      features: [
        'Automatic game import from accounts',
        'Batch processing of analysis',
        'Custom file processing scripts',
        'Scheduled maintenance tasks'
      ]
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
              File Management
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Guide
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Master file organization in Pawn Appétit. Learn to create, import, organize, and manage 
              all types of chess files for optimal workflow and study efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* File Types Overview */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Chess File Types
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Understand the different types of chess files and their specific purposes in your study routine.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {fileTypes.map((fileType, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white flex-shrink-0">
                    {fileType.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {fileType.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {fileType.description}
                    </p>
                    <div className="mt-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Formats: {fileType.formats.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {fileType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Best Used For:</h4>
                    <ul className="space-y-2">
                      {fileType.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{useCase}</span>
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

      {/* File Operations */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              File Operations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Learn the essential operations for working with chess files effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {fileOperations.map((operation, index) => (
              <div key={index} className="card p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white mx-auto mb-4">
                    {operation.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {operation.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {operation.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Step-by-Step:</h4>
                  <ol className="space-y-2">
                    {operation.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Pro Tips:</h4>
                  <ul className="space-y-2">
                    {operation.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Best Practices */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Organization Best Practices
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Develop a systematic approach to organizing your chess files for maximum efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {organizationTips.map((category, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {category.suggestions.map((suggestion, suggestionIndex) => (
                    <li key={suggestionIndex} className="border-l-4 border-primary-600 pl-4">
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {suggestion}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Advanced File Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover powerful features for advanced file management and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Reference */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-12">
              Quick Actions Reference
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <FileText className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">New File</h3>
                <p className="text-primary-100 text-sm">Ctrl+N / Cmd+N</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Import</h3>
                <p className="text-primary-100 text-sm">Ctrl+I / Cmd+I</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Search className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Search</h3>
                <p className="text-primary-100 text-sm">Ctrl+F / Cmd+F</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <FolderOpen className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Open Folder</h3>
                <p className="text-primary-100 text-sm">Ctrl+O / Cmd+O</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/docs/analysis"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 mr-4"
              >
                Game Analysis
              </a>
              <a
                href="/docs/databases"
                className="text-white hover:text-primary-100 font-medium"
              >
                Database Management <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}