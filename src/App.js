import ColorPicker from "./components/ColorPicker";
import "./App.css";

function App() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#33FFFF",
    "#FF33FF",
    "#FFFF33",
    "#FF3366",
    "#3366FF",
    "#33FFCC",
    "#CC33FF",
    "#66FF33",
    "#FF6633",
    "#FF9999",
    "#99FF99",
    "#9999FF",
    "#999999",
    "#9900CC",
    "#00CC66",
    "#FF6600",
  ];

  return (
    <div className="App">
      <h1>Color Picker Example</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
