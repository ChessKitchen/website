'use client'

import { useState, useEffect } from 'react'
import { GitHubStats, githubService, GitHubService } from '../lib/github'

interface UseGitHubStatsReturn {
  stats: GitHubStats | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useGitHubStats(): UseGitHubStatsReturn {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStats = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await githubService.getStats()
      setStats(data)
    } catch (err) {
      console.error('Failed to fetch GitHub stats:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch stats')
      
      // Set fallback stats
      setStats({
        stars: 0,
        forks: 0,
        watchers: 0,
        issues: 0,
        contributors: 0,
        commits: 0,
        languages: [],
        lastUpdated: new Date().toISOString(),
        downloadCount: 0
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return {
    stats,
    loading,
    error,
    refetch: fetchStats
  }
}

// Component for displaying formatted stats
interface StatDisplayProps {
  value: number
  fallback: string
  format?: boolean
}

export function StatDisplay({ value, fallback, format = true }: StatDisplayProps) {
  if (value === 0) {
    return <span>{fallback}</span>
  }
  
  return (
    <span>
      {format ? GitHubService.formatNumber(value) : value.toLocaleString()}
    </span>
  )
}
