import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomisationProvider } from "./components/Customisation";

function App() {
  return (
    <CustomisationProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomisationProvider>
  );
}

export default App;
