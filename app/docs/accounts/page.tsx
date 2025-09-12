import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Users, Globe, Shield, RefreshCcw, Download, TrendingUp } from 'lucide-react'

export default function AccountsDocumentation() {
    const supportedPlatforms = [
        {
            name: 'Chess.com',
            icon: '♟️',
            description: 'The world\'s largest chess platform with millions of players',
            features: [
                'Game import from all time controls',
                'Live game following and analysis',
                'Profile and statistics access',
                'Tournament and event tracking',
                'Puzzle and lesson integration',
                'Friend and club management'
            ],
            connection: [
                'Go to Settings → Accounts',
                'Click "Connect Chess.com Account"',
                'Enter your Chess.com username',
                'Authorize Pawn Appétit access',
                'Configure import preferences',
                'Games will sync automatically'
            ],
            dataAccess: [
                'All played games (unlimited history)',
                'Current and historical ratings',
                'Tournament participation',
                'Daily puzzle performance',
                'Study and lesson progress',
                'Social connections and clubs'
            ],
            limitations: [
                'API rate limits may slow bulk imports',
                'Some premium features require Chess.com membership',
                'Live game data depends on Chess.com\'s API availability'
            ]
        },
        {
            name: 'Lichess.org',
            icon: '⚡',
            description: 'Free and open-source chess platform focused on fair play',
            features: [
                'Unlimited game import with full history',
                'Study import and synchronization',
                'Analysis board integration',
                'Tournament participation tracking',
                'Puzzle and training data',
                'Team and forum integration'
            ],
            connection: [
                'Go to Settings → Accounts',
                'Click "Connect Lichess Account"',
                'Enter your Lichess username',
                'Generate API token on Lichess',
                'Paste token into Pawn Appétit',
                'Configure synchronization settings'
            ],
            dataAccess: [
                'Complete game history with analysis',
                'All studies and annotations',
                'Tournament and arena results',
                'Puzzle rush and training stats',
                'Team memberships and activities',
                'Analysis and computer usage data'
            ],
            limitations: [
                'Requires API token generation',
                'Some features need account verification',
                'Bulk operations may take time'
            ]
        }
    ]

    const accountManagement = [
        {
            title: 'Adding Accounts',
            icon: <Users className="h-8 w-8" />,
            description: 'Connect multiple chess platform accounts for comprehensive data access',
            process: [
                'Navigate to Settings → Accounts section',
                'Choose platform (Chess.com or Lichess)',
                'Follow platform-specific authentication',
                'Configure data import preferences',
                'Set synchronization schedule',
                'Test connection and initial import'
            ],
            tips: [
                'Connect all your active chess accounts',
                'Use same username across platforms if possible',
                'Configure import limits for large game collections',
                'Set up automatic sync schedules'
            ]
        },
        {
            title: 'Account Synchronization',
            icon: <RefreshCcw className="h-8 w-8" />,
            description: 'Keep your local chess data synchronized with online platforms',
            options: [
                'Automatic sync: Updates happen in background',
                'Manual sync: Trigger updates when needed',
                'Scheduled sync: Set specific times for updates',
                'Selective sync: Choose specific data types'
            ],
            settings: [
                'Sync frequency (hourly, daily, weekly)',
                'Data types to include/exclude',
                'Bandwidth and storage limits',
                'Conflict resolution preferences'
            ],
            monitoring: [
                'Last sync timestamp and status',
                'Sync errors and resolution steps',
                'Data transfer statistics',
                'Account quota and usage limits'
            ]
        },
        {
            title: 'Privacy & Security',
            icon: <Shield className="h-8 w-8" />,
            description: 'Manage privacy settings and secure account connections',
            privacy: [
                'Local data storage with encryption',
                'No data transmitted to third parties',
                'Optional cloud backup with encryption',
                'Anonymous usage analytics (opt-in only)'
            ],
            security: [
                'OAuth authentication for secure connections',
                'API tokens stored securely locally',
                'Regular security updates and patches',
                'Account disconnection and data removal'
            ],
            controls: [
                'Disable specific data collection',
                'Delete imported account data',
                'Revoke platform access tokens',
                'Export data before disconnection'
            ]
        }
    ]

    const features = [
        {
            title: 'Automatic Game Import',
            icon: <Download className="h-8 w-8" />,
            description: 'Your games are automatically imported as you play them online',
            benefits: [
                'Never miss analyzing a game',
                'Immediate access to fresh games',
                'Consistent game collection',
                'Metadata preservation'
            ],
            configuration: [
                'Choose time controls to import',
                'Set minimum rating thresholds',
                'Include/exclude casual games',
                'Handle game variants and formats'
            ]
        },
        {
            title: 'Rating & Performance Tracking',
            icon: <TrendingUp className="h-8 w-8" />,
            description: 'Track your chess improvement across platforms and time controls',
            metrics: [
                'Rating progression over time',
                'Performance by time control',
                'Opening success rates',
                'Tactical improvement trends'
            ],
            visualization: [
                'Rating graphs and trend lines',
                'Performance heat maps',
                'Opening repertoire statistics',
                'Comparative platform analysis'
            ]
        },
        {
            title: 'Social Features',
            icon: <Users className="h-8 w-8" />,
            description: 'Manage your chess social connections and follow friends\' progress',
            connections: [
                'Import friend lists from platforms',
                'Follow friends\' game activity',
                'Compare performance and progress',
                'Share analysis and insights'
            ],
            collaboration: [
                'Shared study sessions',
                'Team tournament management',
                'Group analysis projects',
                'Chess club integration'
            ]
        },
        {
            title: 'Offline Capabilities',
            icon: <Globe className="h-8 w-8" />,
            description: 'Access your data even when disconnected from the internet',
            offline: [
                'All imported games available offline',
                'Local analysis and annotation',
                'Repertoire training without internet',
                'Game review and study'
            ],
            sync: [
                'Automatic sync when reconnected',
                'Conflict resolution for offline changes',
                'Queued uploads for new analysis',
                'Background synchronization'
            ]
        }
    ]

    const accountSpecific = [
        {
            platform: 'Chess.com',
            icon: '♟️',
            uniqueFeatures: [
                {
                    name: 'Premium Content Integration',
                    description: 'Access Chess.com lessons, courses, and premium features',
                    details: [
                        'Import completed lessons and courses',
                        'Track learning progress and achievements',
                        'Access master class content offline',
                        'Integrate with Chess.com tools'
                    ]
                },
                {
                    name: 'Live Event Tracking',
                    description: 'Follow live tournaments and events',
                    details: [
                        'Real-time tournament updates',
                        'Live game following with analysis',
                        'Event bracket and standings',
                        'Player performance tracking'
                    ]
                },
                {
                    name: 'Club & Team Management',
                    description: 'Manage Chess.com club activities and team events',
                    details: [
                        'Club member game tracking',
                        'Team tournament organization',
                        'Club statistics and leaderboards',
                        'Member progress monitoring'
                    ]
                }
            ]
        },
        {
            platform: 'Lichess.org',
            icon: '⚡',
            uniqueFeatures: [
                {
                    name: 'Study Integration',
                    description: 'Deep integration with Lichess studies and analysis',
                    details: [
                        'Import all studies with annotations',
                        'Collaborative study editing',
                        'Study sharing and publication',
                        'Advanced position analysis'
                    ]
                },
                {
                    name: 'Arena & Tournament System',
                    description: 'Comprehensive tournament participation tracking',
                    details: [
                        'Arena tournament statistics',
                        'Swiss tournament results',
                        'Performance rating calculations',
                        'Tournament history and trends'
                    ]
                },
                {
                    name: 'Training Integration',
                    description: 'Access Lichess training tools and statistics',
                    details: [
                        'Puzzle rush performance tracking',
                        'Tactical training progress',
                        'Opening trainer results',
                        'Coordinate training statistics'
                    ]
                }
            ]
        }
    ]

    const troubleshooting = [
        {
            issue: 'Connection Problems',
            solutions: [
                'Verify username and credentials',
                'Check internet connection stability',
                'Regenerate API tokens if needed',
                'Clear authentication cache',
                'Contact platform support if persistent'
            ]
        },
        {
            issue: 'Slow Import/Sync',
            solutions: [
                'Check API rate limits and quotas',
                'Reduce import batch size',
                'Schedule sync during off-peak hours',
                'Exclude unnecessary data types',
                'Monitor network bandwidth usage'
            ]
        },
        {
            issue: 'Missing Games',
            solutions: [
                'Check import filters and settings',
                'Verify game meets import criteria',
                'Force manual sync for recent games',
                'Check platform privacy settings',
                'Review error logs for import failures'
            ]
        },
        {
            issue: 'Data Inconsistencies',
            solutions: [
                'Compare timestamps between platforms',
                'Check for duplicate game detection',
                'Verify metadata mapping accuracy',
                'Reset and re-import if necessary',
                'Report bugs with specific examples'
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
                            Account Integration
                            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                                {" "}Guide
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                            Connect your Chess.com and Lichess accounts to Pawn Appétit for seamless game import,
                            analysis, and progress tracking across all your chess activities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Supported Platforms */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Supported Chess Platforms
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Connect your accounts from major chess platforms for comprehensive data integration.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {supportedPlatforms.map((platform, index) => (
                            <div key={index} className="card p-8">
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="text-6xl">{platform.icon}</div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                                            {platform.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                                            {platform.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connection Process:</h4>
                                        <ol className="space-y-2">
                                            {platform.connection.map((step, stepIndex) => (
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
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Available Features:</h4>
                                        <ul className="space-y-2">
                                            {platform.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Data Access:</h4>
                                        <ul className="space-y-2">
                                            {platform.dataAccess.map((data, dataIndex) => (
                                                <li key={dataIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{data}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Limitations:</h4>
                                        <ul className="space-y-2">
                                            {platform.limitations.map((limitation, limitIndex) => (
                                                <li key={limitIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{limitation}</span>
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

            {/* Account Management */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Account Management
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Efficiently manage multiple chess platform accounts with advanced synchronization and privacy controls.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {accountManagement.map((management, index) => (
                            <div key={index} className="card p-8">
                                <div className="text-center mb-6">
                                    <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white mx-auto mb-4">
                                        {management.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {management.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        {management.description}
                                    </p>
                                </div>

                                {management.process && (
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Process:</h4>
                                        <ol className="space-y-2">
                                            {management.process.map((step, stepIndex) => (
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

                                {management.options && (
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Sync Options:</h4>
                                        <ul className="space-y-2">
                                            {management.options.map((option, optionIndex) => (
                                                <li key={optionIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{option}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {management.privacy && (
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Privacy Features:</h4>
                                        <ul className="space-y-2">
                                            {management.privacy.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {management.security && (
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Security Measures:</h4>
                                        <ul className="space-y-2">
                                            {management.security.map((measure, measureIndex) => (
                                                <li key={measureIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{measure}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {(management.tips || management.settings || management.monitoring || management.controls) && (
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                                            {management.tips ? 'Tips:' : management.settings ? 'Settings:' : management.monitoring ? 'Monitoring:' : 'Controls:'}
                                        </h4>
                                        <ul className="space-y-2">
                                            {(management.tips || management.settings || management.monitoring || management.controls || []).map((item, itemIndex) => (
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

            {/* Account Features */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Account Integration Features
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Powerful features enabled by connecting your chess platform accounts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {features.map((feature, index) => (
                            <div key={index} className="card p-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {feature.benefits && (
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Benefits:</h4>
                                        <ul className="space-y-2">
                                            {feature.benefits.map((benefit, benefitIndex) => (
                                                <li key={benefitIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {feature.metrics && (
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Available Metrics:</h4>
                                        <ul className="space-y-2">
                                            {feature.metrics.map((metric, metricIndex) => (
                                                <li key={metricIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{metric}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {feature.connections && (
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Social Connections:</h4>
                                        <ul className="space-y-2">
                                            {feature.connections.map((connection, connectionIndex) => (
                                                <li key={connectionIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{connection}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {feature.offline && (
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Offline Features:</h4>
                                        <ul className="space-y-2">
                                            {feature.offline.map((offline, offlineIndex) => (
                                                <li key={offlineIndex} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">{offline}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                                        {feature.configuration ? 'Configuration:' : feature.visualization ? 'Visualization:' : feature.collaboration ? 'Collaboration:' : 'Sync Features:'}
                                    </h4>
                                    <ul className="space-y-2">
                                        {(feature.configuration || feature.visualization || feature.collaboration || feature.sync || []).map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                                                <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform-Specific Features */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Platform-Specific Features
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Unique capabilities for each supported chess platform.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {accountSpecific.map((platform, index) => (
                            <div key={index} className="card p-8">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="text-4xl">{platform.icon}</div>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                        {platform.platform} Unique Features
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                                    {platform.uniqueFeatures.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                                {feature.name}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                                {feature.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {feature.details.map((detail, detailIndex) => (
                                                    <li key={detailIndex} className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                                                        <span className="text-gray-600 dark:text-gray-300 text-sm">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
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
                            Troubleshooting Account Issues
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Common issues and solutions for account integration problems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {troubleshooting.map((problem, index) => (
                            <div key={index} className="card p-8">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                                    {problem.issue}
                                </h3>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Solutions:</h4>
                                    <ol className="space-y-3">
                                        {problem.solutions.map((solution, solutionIndex) => (
                                            <li key={solutionIndex} className="flex items-start gap-3">
                                                <span className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                                                    {solutionIndex + 1}
                                                </span>
                                                <span className="text-gray-600 dark:text-gray-300 text-sm">{solution}</span>
                                            </li>
                                        ))}
                                    </ol>
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
                            Connected Accounts, Enhanced Chess Experience
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-primary-100">
                            With your accounts connected, explore advanced analysis and training features for comprehensive chess improvement.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/docs/analysis"
                                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                            >
                                Analyze Your Games
                            </a>
                            <a
                                href="/docs/files"
                                className="text-white hover:text-primary-100 font-medium"
                            >
                                Manage Your Files <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}