import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import { BasicAnimate } from "./components/BasicAnimate";
import { Keyframes } from "./components/Keyframes";
import { Refresh } from "./components/Refresh";
import { Gesture } from "./components/Gesture";
import { Drag } from "./components/Drag"
import { MotionValues } from "./components/MotionValues"
import { history } from "./history";

import "./index.css";


const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Router history={history}>
        <>
          <Refresh onClick={() => setCount(count + 1)} />
          <Switch>
            <Route
              path="/basic-animate"
              exact
              render={() => <BasicAnimate key={`basic-animate-${count}`} />}
            />
            <Route
              path="/keyframes"
              exact
              render={() => <Keyframes key={`keyframes-${count}`} />}
            />
            <Route
              path="/gesture"
              exact
              render={() => <Gesture key={`gesture-${count}`} />}
            />
            <Route
              path="/drag"
              exact
              render={() => <Drag key={`drag-${count}`} />}
            />
            <Route
              path="/motion-values"
              exact
              render={() => <MotionValues key={`motion-values-${count}`} />}
            />
            <Route path="/" component={() => <div>this is fallback</div>} />
          </Switch>
        </>
      </Router>
    </>
  );
};

render(<App />, document.getElementById("root"));
