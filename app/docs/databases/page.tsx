import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Database, Globe, HardDrive, Search, TrendingUp, BookOpen, Users, Clock, Award } from 'lucide-react'

export default function DatabasesDocumentation() {
  const databaseSources = [
    {
      title: 'Web Installation',
      icon: <Globe className="h-8 w-8" />,
      description: 'Download and install databases directly from online sources',
      sources: [
        {
          name: 'Master Game Collections',
          description: 'Games from world champions and top players',
          examples: ['Mega Database 2024', 'ChessBase Big Database', 'TWIC Games'],
          size: '8-15 million games',
          updateFrequency: 'Weekly/Monthly'
        },
        {
          name: 'Opening Databases',
          description: 'Specialized collections for opening study',
          examples: ['Opening Tree', 'Chess Opening Wizard', 'ECO Database'],
          size: '500K-2M positions',
          updateFrequency: 'Monthly/Quarterly'
        },
        {
          name: 'Correspondence Games',
          description: 'High-quality correspondence chess games',
          examples: ['ICCF Database', 'Correspondence Chess DB', 'Mail Chess Games'],
          size: '100K-500K games',
          updateFrequency: 'Quarterly'
        },
        {
          name: 'Tournament Collections',
          description: 'Games from specific tournaments and events',
          examples: ['World Championship DB', 'Olympiad Games', 'Top Tournament Collection'],
          size: '50K-1M games',
          updateFrequency: 'After events'
        }
      ],
      installation: [
        'Go to Databases → Web Sources',
        'Browse available database collections',
        'Select databases matching your interests',
        'Click "Download" and wait for completion',
        'Database will be automatically indexed and ready to use'
      ]
    },
    {
      title: 'Local Installation',
      icon: <HardDrive className="h-8 w-8" />,
      description: 'Import database files from your computer or external sources',
      formats: ['PGN', 'CBH/CBF', 'DGT', 'ChessX', 'SCID'],
      installation: [
        'Click Databases → Import Local Database',
        'Select database files or folders',
        'Choose import settings and encoding',
        'Review database information and metadata',
        'Confirm import and wait for indexing',
        'Organize imported databases into collections'
      ],
      tips: [
        'Large databases may take time to index',
        'Check file encoding for international characters',
        'Organize databases by theme or source',
        'Backup original files before importing'
      ]
    },
    {
      title: 'Endgame Tablebases',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Perfect endgame knowledge with Syzygy and Nalimov tablebases',
      types: [
        {
          name: 'Syzygy Tablebases',
          description: 'Modern compressed tablebases up to 7 pieces',
          size: '149 GB (6-piece), 18.4 TB (7-piece)',
          coverage: 'All positions up to 7 pieces',
          usage: 'Engine analysis and endgame study'
        },
        {
          name: 'Nalimov Tablebases',
          description: 'Legacy tablebases for older engines',
          size: '7.05 GB (5-piece), 1.2 TB (6-piece)',
          coverage: 'All positions up to 6 pieces',
          usage: 'Compatibility with older engines'
        }
      ],
      installation: [
        'Go to Settings → Tablebases',
        'Choose tablebase type (Syzygy recommended)',
        'Select pieces to download (3-7 pieces)',
        'Choose download location with sufficient space',
        'Configure engines to use tablebases',
        'Test with known endgame positions'
      ]
    }
  ]

  const managementFeatures = [
    {
      title: 'Database Organization',
      icon: <Database className="h-8 w-8" />,
      description: 'Keep your databases organized and easily accessible',
      features: [
        'Custom database categories and tags',
        'Hierarchical folder structure',
        'Database merge and split operations',
        'Duplicate game detection and removal',
        'Metadata editing and standardization',
        'Cross-database reference linking'
      ],
      bestPractices: [
        'Group databases by theme or time period',
        'Use consistent naming conventions',
        'Regular maintenance and cleanup',
        'Backup databases before major changes'
      ]
    },
    {
      title: 'Search & Filtering',
      icon: <Search className="h-8 w-8" />,
      description: 'Powerful search capabilities across your entire database collection',
      searchTypes: [
        'Position Search: Find exact or similar positions',
        'Header Search: Search by player, event, date, rating',
        'Material Search: Find positions with specific material',
        'Pattern Search: Find tactical patterns and motifs',
        'Endgame Search: Search by piece configuration',
        'Full-text Search: Search comments and annotations'
      ],
      advancedFilters: [
        'Rating ranges and player strength',
        'Time control and game types',
        'ECO opening codes and variations',
        'Result filters (wins, draws, losses)',
        'Date ranges and tournaments',
        'Annotation quality and depth'
      ]
    },
    {
      title: 'Performance Optimization',
      icon: <TrendingUp className="h-8 w-8" />,
      description: 'Optimize database performance for large collections',
      optimizations: [
        'Database indexing for faster searches',
        'Memory allocation for database caching',
        'SSD storage for improved access speed',
        'Regular database defragmentation',
        'Compression for storage efficiency',
        'Parallel search across multiple databases'
      ],
      monitoring: [
        'Search performance statistics',
        'Database size and growth tracking',
        'Memory usage monitoring',
        'Index optimization recommendations'
      ]
    }
  ]

  const usageScenarios = [
    {
      title: 'Opening Preparation',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Use databases to prepare your opening repertoire',
      workflow: [
        'Search for games in your chosen opening',
        'Analyze move statistics and success rates',
        'Study games by strong players in the line',
        'Identify critical positions and variations',
        'Create repertoire files based on database analysis',
        'Track popularity trends of different moves'
      ],
      tips: [
        'Filter by rating to focus on master games',
        'Look for recent games to find current theory',
        'Study both sides of your repertoire',
        'Note transpositions between openings'
      ]
    },
    {
      title: 'Opponent Research',
      icon: <Users className="h-8 w-8" />,
      description: 'Research specific opponents using database searches',
      preparation: [
        'Search for all games by target opponent',
        'Analyze their opening preferences by color',
        'Identify time trouble patterns',
        'Study their typical endgame technique',
        'Look for repeated mistakes or weaknesses',
        'Prepare specific lines against their style'
      ],
      insights: [
        'Opening repertoire width vs depth',
        'Performance in different time controls',
        'Recent form and rating trends',
        'Preferred piece setups and structures'
      ]
    },
    {
      title: 'Position Analysis',
      icon: <Search className="h-8 w-8" />,
      description: 'Explore similar positions for deeper understanding',
      analysis: [
        'Find games reaching similar positions',
        'Study how masters handled the position',
        'Compare different approaches and plans',
        'Analyze statistical outcomes',
        'Learn typical tactical motifs',
        'Understand positional themes'
      ],
      applications: [
        'Middlegame planning and strategy',
        'Endgame technique improvement',
        'Tactical pattern recognition',
        'Positional understanding development'
      ]
    },
    {
      title: 'Study and Training',
      icon: <Award className="h-8 w-8" />,
      description: 'Create systematic training programs using database content',
      training: [
        'Generate puzzle sets from database positions',
        'Create themed game collections',
        'Set up spaced repetition study plans',
        'Track progress in specific openings',
        'Analyze improvement over time',
        'Generate practice tests and quizzes'
      ],
      metrics: [
        'Success rate in specific positions',
        'Time spent on different topics',
        'Improvement tracking over time',
        'Weakness identification and remediation'
      ]
    }
  ]

  const maintenanceTasks = [
    {
      task: 'Regular Updates',
      frequency: 'Weekly/Monthly',
      description: 'Keep databases current with latest games',
      actions: [
        'Download latest TWIC files',
        'Update master game collections',
        'Add new tournament results',
        'Merge incremental updates'
      ]
    },
    {
      task: 'Quality Control',
      frequency: 'Monthly',
      description: 'Maintain database quality and accuracy',
      actions: [
        'Remove duplicate games',
        'Fix encoding issues',
        'Standardize player names',
        'Verify game metadata'
      ]
    },
    {
      task: 'Performance Optimization',
      frequency: 'Quarterly',
      description: 'Optimize database performance',
      actions: [
        'Rebuild database indexes',
        'Defragment large databases',
        'Archive old or unused databases',
        'Update search algorithms'
      ]
    },
    {
      task: 'Backup and Recovery',
      frequency: 'Monthly',
      description: 'Protect your valuable database collection',
      actions: [
        'Create full database backups',
        'Test backup restoration',
        'Sync to cloud storage',
        'Document database locations'
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
              Database Management
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Guide
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Master chess database management in Pawn Appétit. Install, organize, and leverage 
              massive game collections for opening preparation, analysis, and study.
            </p>
          </div>
        </div>
      </section>

      {/* Database Sources */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Database Sources & Installation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Access millions of chess games through various database sources and installation methods.
            </p>
          </div>

          <div className="space-y-16">
            {databaseSources.map((source, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white flex-shrink-0">
                    {source.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {source.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {source.description}
                    </p>
                  </div>
                </div>

                {source.sources && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Available Database Types:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {source.sources.map((db, dbIndex) => (
                        <div key={dbIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {db.name}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {db.description}
                          </p>
                          <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                            <div>Size: {db.size}</div>
                            <div>Updates: {db.updateFrequency}</div>
                            <div>Examples: {db.examples.join(', ')}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {source.types && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Tablebase Types:
                    </h4>
                    <div className="space-y-4">
                      {source.types.map((type, typeIndex) => (
                        <div key={typeIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {type.name}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {type.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500 dark:text-gray-400">
                            <div><strong>Size:</strong> {type.size}</div>
                            <div><strong>Coverage:</strong> {type.coverage}</div>
                            <div><strong>Usage:</strong> {type.usage}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Installation Steps:</h4>
                    <ol className="space-y-3">
                      {source.installation.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {source.tips && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Pro Tips:</h4>
                      <ul className="space-y-3">
                        {source.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {source.formats && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Supported Formats:</h4>
                      <div className="flex flex-wrap gap-2">
                        {source.formats.map((format, formatIndex) => (
                          <span key={formatIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm">
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Management */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Database Management Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Powerful tools to organize, search, and optimize your chess database collection.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {managementFeatures.map((feature, index) => (
              <div key={index} className="card p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>

                {feature.features && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {feature.searchTypes && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Search Types:</h4>
                    <ul className="space-y-2">
                      {feature.searchTypes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {feature.advancedFilters && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Advanced Filters:</h4>
                    <ul className="space-y-2">
                      {feature.advancedFilters.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {feature.optimizations && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Optimizations:</h4>
                    <ul className="space-y-2">
                      {feature.optimizations.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {feature.bestPractices && (
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Best Practices:</h4>
                    <ul className="space-y-2">
                      {feature.bestPractices.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Scenarios */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Database Usage Scenarios
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Practical applications for leveraging your chess database collection effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {usageScenarios.map((scenario, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white flex-shrink-0">
                    {scenario.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {scenario.description}
                    </p>
                  </div>
                </div>

                {scenario.workflow && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Workflow:</h4>
                    <ol className="space-y-2">
                      {scenario.workflow.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {scenario.preparation && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Preparation Steps:</h4>
                    <ol className="space-y-2">
                      {scenario.preparation.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {scenario.analysis && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Analysis Approach:</h4>
                    <ol className="space-y-2">
                      {scenario.analysis.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {scenario.training && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Training Methods:</h4>
                    <ol className="space-y-2">
                      {scenario.training.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Insights:</h4>
                  <ul className="space-y-2">
                    {(scenario.tips || scenario.insights || scenario.applications || scenario.metrics || []).map((tip, tipIndex) => (
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

      {/* Maintenance & Best Practices */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Database Maintenance
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Keep your database collection healthy, current, and performing optimally.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {maintenanceTasks.map((task, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {task.task}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400">
                      {task.frequency}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {task.description}
                </p>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Actions:</h4>
                  <ul className="space-y-2">
                    {task.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Master Database-Driven Chess Study
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Combine powerful databases with advanced analysis tools for comprehensive chess improvement.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/docs/analysis"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Game Analysis
              </a>
              <a
                href="/docs/files"
                className="text-white hover:text-primary-100 font-medium"
              >
                File Management <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}