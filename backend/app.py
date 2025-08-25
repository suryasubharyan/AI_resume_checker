from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import PyPDF2

app = Flask(__name__)
CORS(app)  # Allow frontend to connect

# Load model & vectorizer
model = joblib.load("model/resume_model.pkl")
vectorizer = joblib.load("model/vectorizer.pkl")

def extract_text_from_pdf(file):
    pdf_reader = PyPDF2.PdfReader(file)
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

@app.route("/")
def home():
    return {"message": "Resume Screener API is running"}

@app.route("/predict", methods=["POST"])
def predict():
    try:
        if "file" in request.files:
            file = request.files["file"]
            resume_text = extract_text_from_pdf(file)
        else:
            data = request.json
            resume_text = data.get("resume_text", "")

        if not resume_text.strip():
            return jsonify({"error": "No resume text provided"}), 400

        X = vectorizer.transform([resume_text])
        prediction = model.predict(X)[0]
        probability = model.predict_proba(X)[0][1]

        return jsonify({
            "prediction": int(prediction),
            "suitability_score": round(probability * 100, 2)
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
