import { Button } from "./components/button/button";
import "./style/fonts.css";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold my-8">Hello tokens</h1>
      <div className="flex gap-4 flex-row justify-center mb-4">
        <Button>button label</Button>
        <Button variant="secondary">button label</Button>
        <Button variant="tertiary">button label</Button>
        <Button variant="ghost">button label</Button>
      </div>

      <div className="flex gap-4 flex-row justify-center mb-4">
        <Button size="compact">button label</Button>
        <Button variant="secondary" size="compact">
          button label
        </Button>
        <Button variant="tertiary" size="compact">
          button label
        </Button>
        <Button variant="ghost" size="compact">
          button label
        </Button>
      </div>
      <div className="bg-black  p-26 flex gap-4 flex-row justify-center mb-4">
        <Button size="compact" onSurface="dark">
          button label
        </Button>
        <Button variant="secondary" size="compact" onSurface="dark">
          button label
        </Button>
        <Button variant="tertiary" size="compact" onSurface="dark">
          button label
        </Button>
        <Button variant="ghost" size="compact" onSurface="dark">
          button label
        </Button>
      </div>
    </div>
  );
}

export default App;
