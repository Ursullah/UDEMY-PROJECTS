import pandas as pd
import joblib
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split

# Ensure the model folder exists
os.makedirs("model", exist_ok=True)

# Load data
df = pd.read_csv("expenses.csv")

# Label encode categories
le = LabelEncoder()
df['Label'] = le.fit_transform(df['Category'])

# Vectorize text
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df['Description'])
y = df['Label']

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save everything
joblib.dump(model, "model/expense_model.pkl")
joblib.dump(vectorizer, "model/vectorizer.pkl")
joblib.dump(le, "model/label_encoder.pkl")

print("✅ Model trained and saved.")
