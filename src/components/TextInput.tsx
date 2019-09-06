import * as React from 'react'
const cn = require('classnames')

export interface ITextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  fullWidth?: boolean
}

export function TextInput(props: ITextInputProps) {
  const { label: labelString, type, fullWidth, ...rest } = props
  return (
    <React.Fragment>
      {!!labelString && <label htmlFor={labelString}>{labelString}</label>}
      <input
        {...rest}
        type={type || 'text'}
        className={cn('input', { 'u-full-width': fullWidth })}
      />
    </React.Fragment>
  )
}
