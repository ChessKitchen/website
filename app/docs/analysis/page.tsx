import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Brain, Download, Eye, FileText, Globe, Zap, TrendingUp, Settings, Import, Play } from 'lucide-react'

export default function GameAnalysis() {
  const importMethods = [
    {
      title: 'Import PGN Files',
      icon: <FileText className="h-8 w-8" />,
      description: 'Load games from PGN files on your computer',
      steps: [
        'Click File → Open or use Ctrl+O (Cmd+O on Mac)',
        'Select one or multiple PGN files',
        'Games will be imported and appear in the Files section',
        'Click on any game to open it for analysis'
      ],
      tips: [
        'Supports multiple games in a single PGN file',
        'Handles variations, comments, and annotations',
        'Preserves game metadata (player names, ratings, date, etc.)'
      ]
    },
    {
      title: 'Lichess.org Import',
      icon: <Globe className="h-8 w-8" />,
      description: 'Import games directly from your Lichess account',
      steps: [
        'Go to Settings → Accounts',
        'Click "Connect Lichess Account"',
        'Enter your Lichess username',
        'Select time controls and number of recent games',
        'Games will be downloaded and imported automatically'
      ],
      tips: [
        'Imports your most recent games across all time controls',
        'Includes game analysis from Lichess if available',
        'Updates automatically when you play new games'
      ]
    },
    {
      title: 'Chess.com Import',
      icon: <Globe className="h-8 w-8" />,
      description: 'Import games from your Chess.com account',
      steps: [
        'Go to Settings → Accounts',
        'Click "Connect Chess.com Account"',
        'Enter your Chess.com username',
        'Select archives and time controls to import',
        'Wait for download to complete'
      ],
      tips: [
        'Note: Chess.com API has rate limits',
        'Large game collections may take time to download',
        'Supports all time controls and game formats'
      ]
    }
  ]

  const analysisFeatures = [
    {
      title: 'Engine Analysis',
      icon: <Brain className="h-8 w-8" />,
      description: 'Deep position analysis with UCI chess engines',
      features: [
        'Real-time evaluation as you navigate moves',
        'Multiple best move suggestions (MultiPV)',
        'Depth and time-based analysis modes',
        'Support for multiple engines simultaneously'
      ],
      usage: [
        'Open a game and click "Analyze" to create analysis tab',
        'Engine starts analyzing immediately',
        'Click on suggested moves to see variations',
        'Adjust engine settings for different analysis depths'
      ]
    },
    {
      title: 'Evaluation Graphs',
      icon: <TrendingUp className="h-8 w-8" />,
      description: 'Visual representation of position evaluation throughout the game',
      features: [
        'Centipawn evaluation graph',
        'Mistake and blunder highlights',
        'Critical moments identification',
        'Advantage shifts visualization'
      ],
      usage: [
        'Graph appears automatically during analysis',
        'Click on graph points to jump to positions',
        'Hover for detailed evaluation information',
        'Red spikes indicate significant evaluation changes'
      ]
    },
    {
      title: 'Opening Book',
      icon: <Eye className="h-8 w-8" />,
      description: 'Opening identification and theoretical move suggestions',
      features: [
        'ECO code identification',
        'Opening name display',
        'Theoretical continuation suggestions',
        'Transposition detection'
      ],
      usage: [
        'Opening information appears automatically',
        'Shows current opening name in game header',
        'Suggests book moves when available',
        'Indicates when leaving theoretical lines'
      ]
    }
  ]

  const analysisSymbols = [
    { symbol: '!', meaning: 'Good move', color: 'text-blue-600' },
    { symbol: '!!', meaning: 'Excellent move', color: 'text-blue-800' },
    { symbol: '?', meaning: 'Questionable move', color: 'text-yellow-600' },
    { symbol: '??', meaning: 'Blunder', color: 'text-red-600' },
    { symbol: '!?', meaning: 'Interesting move', color: 'text-purple-600' },
    { symbol: '?!', meaning: 'Dubious move', color: 'text-orange-600' },
    { symbol: '+=', meaning: 'White is slightly better', color: 'text-gray-700' },
    { symbol: '=+', meaning: 'Black is slightly better', color: 'text-gray-700' },
    { symbol: '+-', meaning: 'White is winning', color: 'text-gray-900' },
    { symbol: '-+', meaning: 'Black is winning', color: 'text-gray-900' }
  ]

  const savingTips = [
    {
      title: 'Save Analysis',
      description: 'Preserve your analysis for future reference',
      steps: [
        'After analyzing, click File → Save or Ctrl+S',
        'Choose location and filename for your analyzed game',
        'Analysis annotations are saved in PGN format',
        'Engine evaluations and variations are preserved'
      ]
    },
    {
      title: 'Export Options',
      description: 'Share your analysis in various formats',
      steps: [
        'Use File → Export to access export options',
        'Export as PGN with or without analysis',
        'Generate study links for online sharing',
        'Export specific positions as FEN'
      ]
    },
    {
      title: 'Organize Games',
      description: 'Keep your analyzed games organized',
      steps: [
        'Create folders in Files section for organization',
        'Use metadata tags to categorize games',
        'Add custom comments and annotations',
        'Rate games with star system for importance'
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
              Game Analysis
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Guide
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Master the art of chess analysis with Pawn Appétit's powerful engine analysis, 
              annotation tools, and game import features.
            </p>
          </div>
        </div>
      </section>

      {/* Import Methods */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Importing Games
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Multiple ways to get your chess games into Pawn Appétit for analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {importMethods.map((method, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white flex-shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {method.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Step-by-Step:</h4>
                    <ol className="space-y-3">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-600 dark:text-gray-300">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Pro Tips:</h4>
                    <ul className="space-y-3">
                      {method.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300">{tip}</span>
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

      {/* Analysis Features */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Analysis Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Powerful tools to understand your games and improve your chess.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {analysisFeatures.map((feature, index) => (
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

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">How to Use:</h4>
                  <ul className="space-y-2">
                    {feature.usage.map((usage, usageIndex) => (
                      <li key={usageIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{usage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Symbols */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Understanding Analysis Symbols
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Learn to interpret the standard chess annotation symbols used in analysis.
            </p>
          </div>

          <div className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Move Quality Symbols
                </h3>
                <div className="space-y-4">
                  {analysisSymbols.slice(0, 6).map((symbol, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className={`text-2xl font-bold ${symbol.color} w-8 text-center`}>
                        {symbol.symbol}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{symbol.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Position Evaluation Symbols
                </h3>
                <div className="space-y-4">
                  {analysisSymbols.slice(6).map((symbol, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className={`text-2xl font-bold ${symbol.color} w-8 text-center`}>
                        {symbol.symbol}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{symbol.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>Tip:</strong> These symbols are automatically added by the engine during analysis. 
                You can also add them manually by right-clicking on moves in the notation panel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Saving and Organization */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Saving & Organizing Analysis
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Keep your analyzed games organized and easily accessible for future study.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {savingTips.map((tip, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {tip.description}
                </p>
                <ul className="space-y-3">
                  {tip.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
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
              Ready for Advanced Analysis?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Master engine management and explore repertoire training to take your chess to the next level.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/docs/engines"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Engine Management
              </a>
              <a
                href="/docs/repertoire"
                className="text-white hover:text-primary-100 font-medium"
              >
                Repertoire Training <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}