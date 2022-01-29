import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  console.log(window.location.pathname);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
