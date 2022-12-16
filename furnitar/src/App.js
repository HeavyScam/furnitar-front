import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SelectType from "./pages/SelectType";
import Navbar from "./component/Navbar";
import FurnitureSelect from "./pages/FurnitureSelect";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Landing />} />
          <Route path="/select-type" exact component={() => <SelectType />} />
          <Route exact path="/furniture-select" component={FurnitureSelect} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
