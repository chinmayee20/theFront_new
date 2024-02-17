import Service from './components/Service'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Service />
    </ThemeProvider>
  )
}

export default App
