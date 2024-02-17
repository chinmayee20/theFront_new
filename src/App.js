import Ecommerce from './pages/Ecommerce'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'
function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
    <Ecommerce />
    </ThemeProvider>
  );
}

export default App;
