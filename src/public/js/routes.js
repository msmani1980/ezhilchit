import React from "react";
import {Route, IndexRoute} from "react-router";

import AppComponent from "./app.component";
import IndexComponent from "./components/index/index.component";

export default (
    <Route path ="/" component={AppComponent}>
        <IndexRoute component={IndexComponent}/>
    </Route>
)