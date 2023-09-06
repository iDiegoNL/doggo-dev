import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  zinc: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-50',
}

export function Badge({ variant = 'zinc', className, children, ...props }) {
  className = clsx(
    'inline-flex items-center rounded px-2 h-5 py-0.5 text-xs font-medium',
    variantStyles[variant],
    className,
  )

  return (
    <span className={className} {...props}>
      {children}
    </span>
  )
}
