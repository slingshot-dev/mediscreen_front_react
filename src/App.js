
import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from "./Home";
import Create from "./services/create";
import About from "./About";
import Notes from "./services/notes"
import ListNotes from "./services/listNotes"
import ReportScore from "./components/ReportScore";


function App() {
    return (
        <div>
            <Router>
            <Switch>
                 <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services/create" component={Create}>
                    <Create />
                </Route>
                <Route exact path="/services/notes" component={Notes}>
                    <Notes />
                </Route>
                <Route exact path="/services/listNotes" component={Notes}>
                    <ListNotes/>
                </Route>
                <Route exact path="/services/score" component={ReportScore}>
                    <ReportScore/>
                </Route>
                <Route exact path='/about' component={About}/>
            </Switch>
            </Router>
        </div>
    );
}

export default App;