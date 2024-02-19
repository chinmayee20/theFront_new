import DesktopApp from './components/DesktopApp'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import Page from './components/Page'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Page>
      <DesktopApp />
      </Page>
    </ThemeProvider>
  )
}

export default App
