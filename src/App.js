import { Notifications} from './components/Account'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <Notifications />
    </ThemeProvider>
  )
}

export default App 
