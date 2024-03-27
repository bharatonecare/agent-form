import logo from "./logo.svg";
import "./App.css";
import { AgentForm } from "./pages/AgentForm/AgentForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <AgentForm />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
