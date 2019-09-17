import * as React from 'react'

export interface GeneralProps {
  children: React.ReactNode
}

const H1: React.FC<GeneralProps> = ({ children }) => (
  <div className=".h1">{children}</div>
)

const H2: React.FC<GeneralProps> = ({ children }) => (
  <div className=".h2">{children}</div>
)

const H3: React.FC<GeneralProps> = ({ children }) => (
  <div className=".h3">{children}</div>
)
const H4: React.FC<GeneralProps> = ({ children }) => (
  <div className=".h4">{children}</div>
)
const H5: React.FC<GeneralProps> = ({ children }) => (
  <div className=".h5">{children}</div>
)
const H6: React.FC<GeneralProps> = ({ children }) => (
  <div className=".h6">{children}</div>
)

export const Typography = { H1, H2, H3, H4, H5, H6 }
