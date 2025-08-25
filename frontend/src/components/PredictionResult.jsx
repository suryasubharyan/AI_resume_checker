import React from "react";

const PredictionResult = ({ result }) => {
  // Dynamic color for score bar
  const scoreColor =
    result.suitability_score >= 70
      ? "#16a34a"
      : result.suitability_score >= 40
      ? "#f59e0b"
      : "#dc2626";

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        backgroundColor: "#ffffff",
        boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
        maxWidth: "500px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "12px",
          color: "#1f2937",
        }}
      >
        📊 Prediction Result
      </h2>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "10px",
          color: result.prediction === 1 ? "#16a34a" : "#dc2626",
          fontWeight: "600",
        }}
      >
        {result.prediction === 1 ? "✅ Suitable Candidate" : "❌ Not Suitable"}
      </p>

      <div
        style={{
          textAlign: "left",
          marginTop: "14px",
        }}
      >
        <strong>Suitability Score:</strong>
        <div
          style={{
            marginTop: "8px",
            height: "14px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${result.suitability_score}%`,
              height: "100%",
              backgroundColor: scoreColor,
              transition: "width 0.6s ease",
            }}
          />
        </div>
        <p
          style={{
            marginTop: "6px",
            fontSize: "16px",
            fontWeight: "600",
            color: scoreColor,
          }}
        >
          {result.suitability_score}%
        </p>
      </div>
    </div>
  );
};

export default PredictionResult;
