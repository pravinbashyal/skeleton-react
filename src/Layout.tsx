import * as React from 'react'
import './components/styles/Normalize.css'
import './components/styles/skeleton.css'
import { Button, LayoutContainer, Typography, TextInput } from './components'

const App: React.FC<{}> = () => {
  return (
    <LayoutContainer>
      <Typography.H2>Sound Generator</Typography.H2>
      <div>
        <Button onClick={console.log}>Learn React</Button>
        <TextInput label="bpm"></TextInput>
      </div>
    </LayoutContainer>
  )
}

export default App
