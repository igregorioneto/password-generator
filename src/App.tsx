import { ThemeProvider } from "styled-components";
import { dark } from "./styles/themes/dark";

import GlobalStyle from './styles/global';
import Home from "./screens/Home";

function App() {
  return ( 
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      
      <Home />
    </ThemeProvider> 
  );
}

export default App;
