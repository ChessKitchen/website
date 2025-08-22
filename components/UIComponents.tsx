import React from 'react'
import { LucideIcon } from 'lucide-react'

// Enhanced Button Components
interface ButtonProps {
  children: React.ReactNode
  variant?: 'brand' | 'royal' | 'sage' | 'glass' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'brand',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
}) => {
  const baseClasses = 'btn'
  const variantClasses = {
    brand: 'btn-brand',
    royal: 'btn-royal',
    sage: 'btn-sage',
    glass: 'btn-glass',
    outline: 'btn-outline',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

// Enhanced Card Components
interface CardProps {
  children: React.ReactNode
  variant?: 'feature' | 'brand' | 'glass'
  className?: string
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'brand',
  className = '',
  hover = true,
}) => {
  const variantClasses = {
    feature: 'card-feature',
    brand: 'card-brand',
    glass: 'glass-card',
  }

  const hoverClass = hover ? 'interactive-brand' : ''
  const classes = `${variantClasses[variant]} ${hoverClass} ${className}`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

// Feature Card Component
interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  accent?: 'brand' | 'royal' | 'sage' | 'honey'
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  accent = 'brand',
  className = '',
}) => {
  const accentClasses = {
    brand: {
      bg: 'from-brand-100 to-brand-200 dark:from-brand-900/30 dark:to-brand-800/30',
      text: 'text-brand-600 dark:text-brand-400',
      hover: 'group-hover:text-brand-600'
    },
    royal: {
      bg: 'from-accent-royal-100 to-accent-royal-200 dark:from-accent-royal-900/30 dark:to-accent-royal-800/30',
      text: 'text-accent-royal-600 dark:text-accent-royal-400',
      hover: 'group-hover:text-accent-royal-600'
    },
    sage: {
      bg: 'from-accent-sage-100 to-accent-sage-200 dark:from-accent-sage-900/30 dark:to-accent-sage-800/30',
      text: 'text-accent-sage-600 dark:text-accent-sage-400',
      hover: 'group-hover:text-accent-sage-600'
    },
    honey: {
      bg: 'from-accent-honey-100 to-accent-honey-200 dark:from-accent-honey-900/30 dark:to-accent-honey-800/30',
      text: 'text-accent-honey-600 dark:text-accent-honey-400',
      hover: 'group-hover:text-accent-honey-600'
    }
  }

  return (
    <Card variant="feature" className={`p-8 group ${className}`}>
      <div className="flex items-start space-x-6">
        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${accentClasses[accent].bg} rounded-2xl flex items-center justify-center ${accentClasses[accent].text} group-hover:scale-110 transition-all duration-300 shadow-soft`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-3 flex-1">
          <h3 className={`text-heading-md text-text-primary ${accentClasses[accent].hover} transition-colors duration-300`}>
            {title}
          </h3>
          <p className="text-body text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  )
}

// Badge Component
interface BadgeProps {
  children: React.ReactNode
  variant?: 'brand' | 'royal' | 'sage' | 'honey' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  size = 'md',
  className = '',
}) => {
  const variantClasses = {
    brand: 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300',
    royal: 'bg-accent-royal-100 text-accent-royal-700 dark:bg-accent-royal-900/30 dark:text-accent-royal-300',
    sage: 'bg-accent-sage-100 text-accent-sage-700 dark:bg-accent-sage-900/30 dark:text-accent-sage-300',
    honey: 'bg-accent-honey-100 text-accent-honey-700 dark:bg-accent-honey-900/30 dark:text-accent-honey-300',
    neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  )
}

// Chess Icon Component
interface ChessIconProps {
  piece: '♛' | '♜' | '♝' | '♞' | '♟' | '♔' | '♕' | '♖' | '♗' | '♘' | '♙'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animated?: boolean
}

export const ChessIcon: React.FC<ChessIconProps> = ({
  piece,
  size = 'md',
  className = '',
  animated = false,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
    xl: 'w-20 h-20 text-4xl',
  }

  const animationClass = animated ? 'animate-chess-bounce hover:animate-pulse-glow' : ''

  return (
    <div className={`chess-icon ${sizeClasses[size]} ${animationClass} ${className}`}>
      {piece}
    </div>
  )
}

// Section Header Component
interface SectionHeaderProps {
  badge?: string
  badgeIcon?: LucideIcon
  title: string
  description?: string
  accent?: string
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  accent = 'brand',
  className = '',
}) => {
  return (
    <div className={`text-center space-y-6 ${className}`}>
      {badge && (
        <Badge variant={accent as 'brand' | 'royal' | 'sage' | 'honey' | 'neutral'}>
          {BadgeIcon && <BadgeIcon className="h-4 w-4" />}
          <span>{badge}</span>
        </Badge>
      )}
      <h2 className="text-heading-xl text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-body-lg max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

// Glass Navigation Component
interface GlassNavProps {
  children: React.ReactNode
  scrolled?: boolean
  className?: string
}

export const GlassNav: React.FC<GlassNavProps> = ({
  children,
  scrolled = false,
  className = '',
}) => {
  return (
    <nav className={`${scrolled ? 'glass-nav shadow-soft' : 'bg-transparent'} transition-all duration-500 ${className}`}>
      {children}
    </nav>
  )
}

// Gradient Text Component
interface GradientTextProps {
  children: React.ReactNode
  gradient?: 'brand' | 'royal' | 'sage' | 'rainbow'
  className?: string
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = 'brand',
  className = '',
}) => {
  const gradients = {
    brand: 'bg-gradient-to-r from-brand-600 via-accent-royal-600 to-accent-sage-600',
    royal: 'bg-gradient-to-r from-accent-royal-500 to-accent-royal-700',
    sage: 'bg-gradient-to-r from-accent-sage-500 to-accent-sage-700',
    rainbow: 'bg-gradient-to-r from-brand-500 via-accent-royal-500 via-accent-sage-500 to-accent-honey-500',
  }

  return (
    <span className={`${gradients[gradient]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

// Loading Component
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'chess'
}

export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'spinner',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  if (variant === 'chess') {
    return (
      <div className="flex items-center justify-center space-x-1">
            <span className="text-2xl animate-chess-bounce" style={{ animationDelay: '0ms' }}>♟</span>
        <span className="text-2xl animate-chess-bounce" style={{ animationDelay: '200ms' }}>♜</span>
        <span className="text-2xl animate-chess-bounce" style={{ animationDelay: '400ms' }}>♝</span>
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center space-x-1">
        <div className={`${sizeClasses[size]} bg-brand-500 rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
        <div className={`${sizeClasses[size]} bg-accent-royal-500 rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
        <div className={`${sizeClasses[size]} bg-accent-sage-500 rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
      </div>
    )
  }

  return (
    <div className={`${sizeClasses[size]} border-2 border-brand-200 border-t-brand-500 rounded-full animate-spin`}></div>
  )
}

// Toast Notification Component
interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  onClose: () => void
  className?: string
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  onClose,
  className = '',
}) => {
  const typeClasses = {
    success: 'bg-accent-sage-50 border-accent-sage-200 text-accent-sage-800 dark:bg-accent-sage-900/20 dark:border-accent-sage-700 dark:text-accent-sage-200',
    error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-200',
    warning: 'bg-accent-honey-50 border-accent-honey-200 text-accent-honey-800 dark:bg-accent-honey-900/20 dark:border-accent-honey-700 dark:text-accent-honey-200',
    info: 'bg-brand-50 border-brand-200 text-brand-800 dark:bg-brand-900/20 dark:border-brand-700 dark:text-brand-200',
  }

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-2xl border ${typeClasses[type]} shadow-floating animate-slide-in-left ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="text-current hover:opacity-70 transition-opacity"
        >
          ×
        </button>
      </div>
    </div>
  )
}

const UIComponents = {
  Button,
  Card,
  FeatureCard,
  Badge,
  ChessIcon,
  SectionHeader,
  GlassNav,
  GradientText,
  Loading,
  Toast,
}

export default UIComponents
