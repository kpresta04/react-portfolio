import React from "react";
import ReactDOM from "react-dom";
import "reset-css";

import "./index.scss";
import "./tailwind.generated.css";

import AppRouter from "./routers/AppRouter";

ReactDOM.render(<AppRouter />, document.getElementById("root"));
