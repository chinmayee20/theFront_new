import Home from './components/Home'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Home />
    </ThemeProvider>
  )
}

export default App
