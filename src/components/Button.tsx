import * as React from 'react'
import { default as cn } from 'classnames'

export interface IButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  children: React.ReactNode
}

export function Button(props: IButtonProps) {
  return <button className={cn('buttonPrimary')}>{props.children}</button>
}
