import MobileApp from './components/MobileApp'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <MobileApp />
    </ThemeProvider>
  )
}

export default App
