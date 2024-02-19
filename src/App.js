import Startup from "./components/Startup";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme";
import Page from "./components/Page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <ThemeProvider theme={getTheme("light")}>
      <Page>
        <Startup />
      </Page>
    </ThemeProvider>
  );
}

export default App;
