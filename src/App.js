import Startup from './pages/Startup'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
    <Startup />
    </ThemeProvider>
  );
}

export default App;
