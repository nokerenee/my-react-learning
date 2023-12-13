import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Store/Contexts/UserContext.jsx";
import AppRoutes from "./Routes/AppRoutes.jsx";
import NavBar from "./components/NavBar";
import { CounterProvider } from "./Store/Contexts/CounterContext.jsx";
import { EmojiProvider } from "./Store/Contexts/EmojiContext";
import { Provider } from "react-redux";
import store from "./Store/store";
import { fetchTodos } from "./Store/Reducers/TodosSlice";
// import { ThemeProvider } from "@emotion/react";
import MUITheme from "./components/MUI/Themes/MUITheme";
import Footer from "./components/Footer";
store.dispatch(fetchTodos());

// This code in main.jsx handles rendering the App component into the DOM element with an id of 'root' (in index.html)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* All other routing components need this to work */}
    <Provider store={store}>
      <UserProvider>
        <CounterProvider>
          <EmojiProvider>
            <BrowserRouter>
              <MUITheme>
                <NavBar></NavBar>
                <AppRoutes></AppRoutes>
                <Footer></Footer>
              </MUITheme>
            </BrowserRouter>
          </EmojiProvider>
        </CounterProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
