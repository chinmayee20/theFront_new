import PortfolioGrid from './components/PortfolioGrid'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <PortfolioGrid />
    </ThemeProvider>
  )
}

export default App 
