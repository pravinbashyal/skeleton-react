import * as React from 'react'

export interface LayoutContainerProps {
  children: React.ReactNode
}

export function LayoutContainer({ children }: LayoutContainerProps) {
  return <div className="container">{children}</div>
}
