import { useState } from "react";
import Alert from "./Components/Alert";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#052749";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
        <Navbar
          title="TextUtils"
          about="About TextUtils"
          mode={mode}
          toggleMode={toggelMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm
                  heading="Enter your text to analyse...."
                  mode={mode}
                  showAlert={showAlert}
                />
        </div>    </>
  );
}
export default App;
