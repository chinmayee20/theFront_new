import Agency from './components/Agency'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Agency />
    </ThemeProvider>
  )
}

export default App 
