import React, {useReducer, useState} from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from "./pages/register/Register";
import Navigator from "./pages/navigator/Navigator";
import Navbar from "./Components/Navbar/Navbar";
import RegisterPassed from "./pages/RegistrationPassed/RegisterPassed";
import {initialState, reducer} from "./store/reducer";

function App() {
    const [finish, setFinish] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleOnChange = (event) => {
        dispatch({
            payload: {
                key: event.target.name,
                value: event.target.value
            }
        })
    }

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
                            {
                                !finish
                                    ? <Register
                                        setFinish={setFinish}
                                        handleOnChange={handleOnChange}
                                        state={state}
                                    />
                                    : <RegisterPassed state={state} dispatch={dispatch} setFinish={setFinish} />
                            }
                        </Route>
                        <Route path="/navigator">
                            <Navigator />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
