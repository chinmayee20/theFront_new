import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HelpCenterArticle from './components/HelpCenterArticle/HelpCenterArticle'
import Page from './components/Page';


function App() {
  return (
    <Page>
    <ThemeProvider theme={getTheme('light')}>
      <HelpCenterArticle />
    </ThemeProvider>
    </Page>
  )
}

export default App 
