import CareerOpening from './components/CareerOpening'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import Page from './components/Page'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Page>
      <CareerOpening />
      </Page>
    </ThemeProvider>
  )
}

export default App 
