import  ContactPage from './components/ContactPage'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import Page from './components/Page'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Page>
      <ContactPage />
      </Page>
    </ThemeProvider>
  )
}

export default App 
