import React from "react";
import ReactDOM from "react-dom";

import SideNav from "./components/SideNav";
import Nav from "./components/Nav";
import App from "./App";

ReactDOM.render(<Nav />, document.getElementById("nav"));
ReactDOM.render(<SideNav />, document.getElementById("side__nav"));
ReactDOM.render(<App />, document.getElementById("root"));
