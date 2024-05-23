import "./App.css";
import Homepage from "./pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./pages/Chatpage";
import Music from ".//pages/Music";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/music" component={Music} />
    </div>
  );
}

export default App;
