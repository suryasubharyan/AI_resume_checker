import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import joblib

# Dummy dataset (you can later replace with real resumes & JDs)
data = {
    "resume_text": [
        "Python developer with ML experience",
        "Frontend React developer with UI/UX skills",
        "Data scientist skilled in NLP and AI",
        "Accountant with finance background",
        "HR professional with recruitment skills"
    ],
    "label": [1, 1, 1, 0, 0]  # 1 = suitable for AI/ML, 0 = not suitable
}

df = pd.DataFrame(data)

# Vectorize text
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df["resume_text"])
y = df["label"]

# Train classifier
model = LogisticRegression()
model.fit(X, y)

# Save model and vectorizer
joblib.dump(model, "model/resume_model.pkl")
joblib.dump(vectorizer, "model/vectorizer.pkl")

print("✅ Model trained and saved!")