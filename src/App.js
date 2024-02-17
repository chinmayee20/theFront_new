import Rental from "./components/Rental";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ThemeProvider theme={getTheme("light")}>
      <Rental />
    </ThemeProvider>
  );
}

export default App;
