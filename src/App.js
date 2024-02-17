import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./components/theme";
import DesignCompany from "./components/DesignCompany";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ThemeProvider theme={getTheme("light")}>
      <DesignCompany />
    </ThemeProvider>
  );
}

export default App;
