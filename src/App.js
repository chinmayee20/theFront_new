import PortfolioMasonry from './components/PortfolioMasonry'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <PortfolioMasonry />
    </ThemeProvider>
  )
}

export default App 
