import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Pricing from './components/Pricing'
import Page from './components/Page';


function App() {
  return (
    <Page>
    <ThemeProvider theme={getTheme('light')}>
      <Pricing />
    </ThemeProvider>
    </Page>
  )
}

export default App 
