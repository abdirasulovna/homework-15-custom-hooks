import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Counter />

      <Timer />
      
      <Input />
    </div>
  );
}

export default App;
