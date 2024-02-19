import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PasswordResetSimple from './components/PasswordResetSimple/PasswordResetSimple'
import Page from './components/Page';


function App() {
  return (
    <Page>
    <ThemeProvider theme={getTheme('light')}>
      <PasswordResetSimple />
    </ThemeProvider>
    </Page>
  )
}

export default App 
