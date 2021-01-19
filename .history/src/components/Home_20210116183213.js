import React from 'react';
import { Dropdown } from "react-bootstrap";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Tasks from "./Tasks";

const Home=()=> {

    const options = [
        { value: 'flavor', label: 'flavor' },
        { value: 'yummy', label: 'yummy' },
        { value: 'red', label: 'red' },
        { value: 'green', label: 'green' },
        { value: 'yellow', label: 'yellow' },
      ];
    
        return (
            <div>

            <Router>
                <div>

                <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/a">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

                    {/* <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/users">Users</Link>
                        </li>
                    </ul>
                    </nav> */}

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                    <Route exact path="/a">
                        <Tasks />
                    </Route>
                    {/* <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route> */}
                    </Switch>
                </div>
                </Router>

                {/* <h1>Home COm</h1>
                <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                 */}
            </div>
        );
    }

export default Home;


function inf() {
    return(
        <h1> Inf fgrg trrt trhhrt tg  </h1>
    )
}

