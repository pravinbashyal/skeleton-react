import * as React from 'react'

export interface ILayoutContainerProps {
  children: React.ReactNode
}

export function LayoutContainer({ children }: ILayoutContainerProps) {
  return <div className="container">{children}</div>
}
