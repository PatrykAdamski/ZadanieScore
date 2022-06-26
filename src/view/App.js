import { Dashboard } from "../components/dashboard/Dashboard";
import { Canvas } from "../components/canvas/Canvas";
import { CanvasProvider } from "../providers/CanvasProvider";
import { Cursor } from "../components/cursor/Cursor";

function App() {
  return (
    <div className="App">
      <CanvasProvider>
        <Dashboard />
        <Canvas />
        <Cursor />
      </CanvasProvider>
    </div>
  );
}

export default App;
