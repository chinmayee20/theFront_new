import SignupCover from './components/SignupCover'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <SignupCover />
    </ThemeProvider>
  )
}

export default App 
