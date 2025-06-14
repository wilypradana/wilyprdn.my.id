import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NotFoundPage from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

// import reportWebVitals from "./reportWebVitals";

function MainApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? <Loader /> : <Content />}</div>;
}

function Loader() {
  const style: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

return (
  <div style={style}>
    <Triangle color={"#123abc"} />
  </div>
);

}

function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="*" element={<NotFoundPage />} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default MainApp;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);