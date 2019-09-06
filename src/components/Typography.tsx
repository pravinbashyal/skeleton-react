import * as React from 'react'

export interface IGeneralProps {
  children: React.ReactNode
}

function H1({ children }: IGeneralProps) {
  return <div className=".h1">{children}</div>
}

function H2({ children }: IGeneralProps) {
  return <div className=".h2">{children}</div>
}

function H3({ children }: IGeneralProps) {
  return <div className=".h3">{children}</div>
}

function H4({ children }: IGeneralProps) {
  return <div className=".h4">{children}</div>
}

function H5({ children }: IGeneralProps) {
  return <div className=".h5">{children}</div>
}

function H6({ children }: IGeneralProps) {
  return <div className=".h6">{children}</div>
}

export const Typography = { H1, H2, H3, H4, H5, H6 }
