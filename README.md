# 📄 AI Resume Checker

![Python](https://img.shields.io/badge/Python-3.10-blue?style=for-the-badge&logo=python)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Flask](https://img.shields.io/badge/Flask-2.3-lightgrey?style=for-the-badge&logo=flask)
![Vite](https://img.shields.io/badge/Vite-4.0-purple?style=for-the-badge&logo=vite)

An **AI-powered web application** that evaluates resumes against job descriptions.  
It highlights missing skills/keywords and provides a **match score**, helping job seekers optimize their resumes.

> 💡 Full-stack project demonstrating **ML model training + Flask API + React frontend** integration.

---

## 🚀 Features

- 📂 Upload resume (**PDF / DOCX**) or paste plain text  
- 📝 Enter job description or required skills  
- 🤖 AI model analyzes **resume vs. job** relevance  
- 📊 Generates:
  - **Suitability Score (0–100%)**
  - **Feedback on missing keywords**
  - **Highlighting strengths**
- 💻 Full-stack integration (Python ML + Flask backend + React frontend)  
- 🎨 Modern, clean UI with **inline styling** (no external CSS framework)

---

## 🛠️ Tech Stack

### Backend (Python + Flask)
- Python 3.x  
- Flask (API server)  
- Flask-CORS (CORS handling)  
- Scikit-learn (TF-IDF + Logistic Regression)  
- Pandas / NumPy (data handling)  
- PyMuPDF / python-docx (resume parsing)  
- Pickle / Joblib (save/load model)  

### Frontend (React + Vite)
- React 18 + Vite  
- Axios (API requests)  
- Inline styling (modern, responsive UI)  
- Fully mobile-friendly design  

---

## 📂 Project Structure

```bash
ResumeChecker/
│── backend/
│   ├── app.py              # Flask API server
│   ├── train_model.py      # Trains ML model
│   ├── resume_model.pkl    # Saved ML model
│   ├── utils.py            # Resume parsing / preprocessing
│   └── requirements.txt    # Backend dependencies
│
│── frontend/
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       └── components/
│           ├── ResumeUpload.jsx
│           └── PredictionResult.jsx
│
│── README.md               # Project documentation
