import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider, // Import SidebarProvider
} from "@/components/ui/sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <SidebarProvider> {/* Wrap everything in SidebarProvider */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar>
          <SidebarContent>
            <div className="flex flex-col items-center justify-center min-h-svh">
              <Button>Click me</Button>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <div className="flex flex-col items-center justify-center min-h-svh">
            <Button>Click me</Button>
          </div>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;
