import React, { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-black"
        } min-h-screen`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
