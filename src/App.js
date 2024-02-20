import PortfolioPage from './components/PortfolioPage'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <PortfolioPage />
    </ThemeProvider>
  )
}

export default App 
