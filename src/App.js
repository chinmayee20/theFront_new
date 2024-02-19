import Service from './components/Service'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import Page from './components/Page'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Page>
      <Service />
      </Page>
    </ThemeProvider>
  )
}

export default App
