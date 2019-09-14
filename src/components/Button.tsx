import * as React from 'react'
import { default as cn } from 'classnames'

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button className={cn('buttonPrimary', props.className)}>
      {props.children}
    </button>
  )
}
