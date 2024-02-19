import Coworking from './components/Coworking'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Page from "components/Page"

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Page>
      <Coworking />
      </Page>
    </ThemeProvider>
  )
}

export default App 
