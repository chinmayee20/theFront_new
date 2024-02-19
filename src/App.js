import CareerListing from './components/CareerListing'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <CareerListing />
    </ThemeProvider>
  )
}

export default App 
