import Customers from './components/Customers'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import Page from './components/Page'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Page>
      <Customers />
      </Page>
    </ThemeProvider>
  )
}

export default App 
