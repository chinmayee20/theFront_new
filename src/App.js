import SignupSimple from './components/SignupSimple'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <SignupSimple />
    </ThemeProvider>
  )
}

export default App 
