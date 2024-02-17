import Joblisting from './pages/JobListing'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from './theme'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <ThemeProvider theme={getTheme('light')}>
    <Joblisting />
    </ThemeProvider>
  );
}

export default App;
