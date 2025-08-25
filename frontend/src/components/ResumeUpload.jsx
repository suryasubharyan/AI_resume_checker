import React, { useState } from "react";
import axios from "axios";

const ResumeUpload = ({ setResult }) => {
  const [resumeText, setResumeText] = useState("");
  const [file, setFile] = useState(null);
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        response = await axios.post("https://ai-resume-checker-n077.onrender.com", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        response = await axios.post("https://ai-resume-checker-n077.onrender.com", {
          resume_text: resumeText,
        });
      }
      setResult(response.data);
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("❌ Error making prediction. Check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        width: "100%",
        maxWidth: "500px",
        padding: "28px",
        borderRadius: "14px",
        background: "linear-gradient(135deg, #ffffff, #f9fafb)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        marginBottom: "32px",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          color: "#111827",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Upload or Paste Your Resume
      </h2>

      <textarea
        placeholder="Paste resume text here..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          border: "1px solid #d1d5db",
          borderRadius: "10px",
          fontSize: "15px",
          lineHeight: "1.6",
          resize: "vertical",
          minHeight: "140px",
          backgroundColor: "#f9fafb",
          transition: "all 0.3s ease",
          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.05)",
        }}
      />

      <label
        style={{
          display: "block",
          padding: "14px",
          border: "2px dashed #93c5fd",
          borderRadius: "10px",
          textAlign: "center",
          cursor: "pointer",
          color: "#2563eb",
          fontWeight: "500",
          backgroundColor: "#eff6ff",
          transition: "all 0.3s ease",
        }}
      >
        📂 Choose Resume File (PDF/DOCX)
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover ? "#2563eb" : "#3b82f6",
          color: "#fff",
          padding: "14px 20px",
          borderRadius: "10px",
          fontSize: "17px",
          fontWeight: "600",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.6 : 1,
          boxShadow: hover
            ? "0 6px 18px rgba(37,99,235,0.4)"
            : "0 4px 12px rgba(0,0,0,0.12)",
          transition: "all 0.3s ease",
        }}
      >
        {loading ? "⏳ Processing..." : "🚀 Predict"}
      </button>
    </form>
  );
};

export default ResumeUpload;
