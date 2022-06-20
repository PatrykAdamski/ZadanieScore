import { Dashboard } from "../components/dashboard/Dashboard";
import { Canvas } from "../components/canvas/Canvas";
import { CanvasProvider } from "../providers/CanvasProvider";

function App() {
  return (
    <div className="App">
      <CanvasProvider>
        <Dashboard />
        <Canvas />
      </CanvasProvider>
    </div>
  );
}

export default App;
