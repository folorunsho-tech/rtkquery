import Home from "./Home";
import Nav from "./Nav";
import Blog from "./Blog";
import { Route, Switch } from "react-router";
function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={"/post/:id"} exact>
          <Blog />
        </Route>
      </Switch>
    </>
  );
}

export default App;
