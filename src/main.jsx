import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./components/theme/theme.js";
import { Provider } from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'

// import App from './App'
// import { setupStore } from './store'

// const store = setupStore()

// const reactRoot = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// )
// reactRoot.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )
