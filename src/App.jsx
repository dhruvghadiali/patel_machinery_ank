import { ThemeProvider } from "@/contexts/ThemeContext";

import NavigationMenuComponent from "@Components/navigationMenu";
import HomeScreenComponent from "@ScreenComponents/home";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <NavigationMenuComponent />
      <HomeScreenComponent/>
    </ThemeProvider>
  );
}

export default App;
