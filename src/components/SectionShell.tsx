import type { ReactNode } from 'react'

interface SectionShellProps {
  id?: string
  children: ReactNode
  className?: string
  /** Grows with content instead of locking to one viewport height */
  flow?: boolean
}

export function SectionShell({
  id,
  children,
  className = '',
  flow = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`flex flex-col ${
        flow
          ? ''
          : 'h-dvh snap-start sm:h-full'
      } ${className}`}
    >
      {children}
    </section>
  )
}
