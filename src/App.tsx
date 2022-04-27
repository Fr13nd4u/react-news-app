import React, { createContext, FC } from "react";
import "./App.css";

import { AppRouter } from "./components/AppRouter";
import Header from "./components/Header";
import { useLocalStorage } from "./hooks/useLocalStorege";

export const AuthContext = createContext<any>(null);

const App: FC = () => {
  const [isAuth, setAuth] = useLocalStorage("is-auth", false);

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      <div className="app">
        <Header />
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
