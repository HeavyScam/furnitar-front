import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SelectType from "./pages/SelectType";
import Navbar from "./component/Navbar";
import FurnitureSelect from "./pages/FurnitureSelect";
import { useState } from "react";

function App() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Landing
                length={length}
                width={width}
                height={height}
                setLength={setLength}
                setWidth={setWidth}
                setHeight={setHeight}
              />
            )}
          />
          <Route
            path="/select-type"
            exact
            component={() => (
              <SelectType
                length={length}
                width={width}
                height={height}
                setLength={setLength}
                setWidth={setWidth}
                setHeight={setHeight}
              />
            )}
          />
          <Route exact path="/furniture-select" component={FurnitureSelect} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
