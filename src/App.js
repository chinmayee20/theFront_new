import CareerOpening from './components/CareerOpening'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <CareerOpening />
    </ThemeProvider>
  )
}

export default App 
