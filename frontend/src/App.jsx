import React, { useState } from "react";
import ResumeUpload from "./components/ResumeUpload";
import PredictionResult from "./components/PredictionResult";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "linear-gradient(135deg, #e0f2fe, #fef9c3)",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "800",
          marginBottom: "30px",
          color: "#1e3a8a",
          textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        🌟 AI Resume Screener
      </h1>

      <ResumeUpload setResult={setResult} />

      {result && <PredictionResult result={result} />}
    </div>
  );
}

export default App;
