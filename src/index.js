import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {} from 'react-router-dom'
import reportWebVitals from "./reportWebVitals";
import{ AppProvider} from './Context/Productcontex'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppProvider>
<App />
</AppProvider>
);


reportWebVitals();
