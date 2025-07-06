import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/contexts/ThemeContext"
import NavigationMenuComponent from "@Components/navigationMenu"

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <NavigationMenuComponent />
      <div className="flex min-h-svh flex-col items-center justify-center">
        <h1 className="text-9xl"> Patel Electric  </h1>
        <Button>Click me</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
