import DesktopApp from './components/DesktopApp'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <DesktopApp />
    </ThemeProvider>
  )
}

export default App
