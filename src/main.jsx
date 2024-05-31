// import React from "react";
// import "./sassStyles/_global.scss";
// import "./sassStyles/_typography.scss";
// import { BrowserRouter } from "react-router-dom";
// import ReactDOM from "react-dom";
// import App from "./App";
// // import reportWebVitals from "./reportWebVitals";
// // import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import { Provider } from "react-redux";
// import {
//   configureStore,
//   applyMiddleware,
//   compose,
//   combineReducers,
// } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
// import searchReducer from "./store/reducers/searchReducer";
// import nominateReducer from "./store/reducers/nominateReducer";
// import winnerReducer from "./store/reducers/winnerReducer";

// const composeEnhancers =
//   (process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null) || compose;

// const rootReducer = combineReducers({
//   search: searchReducer,
//   nominate: nominateReducer,
//   winner: winnerReducer,
// });

// const store = configureStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk)),
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   </Provider>,
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://cra.link/PWA
// // serviceWorkerRegistration.register();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import "./sassStyles/_global.scss";
import "./sassStyles/_typography.scss";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import searchReducer from "./store/reducers/searchReducer";
import nominateReducer from "./store/reducers/nominateReducer";
import winnerReducer from "./store/reducers/winnerReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  nominate: nominateReducer,
  winner: winnerReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV === "development",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
