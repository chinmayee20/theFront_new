import { Billing} from './components/Account'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Billing />
    </ThemeProvider>
  )
}

export default App 
