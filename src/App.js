import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Register from "./pages/register/Register";
import Navigator from "./pages/navigator/Navigator";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Router>
            <div style={{display: "flex"}}>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Switch>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/navigator">
                            <Navigator />
                        </Route>
                        <Route path="/">

                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
