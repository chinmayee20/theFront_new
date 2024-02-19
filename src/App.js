import CareerListing from './components/CareerListing'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import Page from './components/Page'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Page>
      <CareerListing />
      </Page>
    </ThemeProvider>
  )
}

export default App 
