import streamlit as st
import joblib

# Load ML components
model = joblib.load("model/expense_model.pkl")
vectorizer = joblib.load("model/vectorizer.pkl")
le = joblib.load("model/label_encoder.pkl")

# 🔹 List all categories the model was trained on
categories = list(le.classes_)

# ────────────────────────────
# 🧠 Streamlit UI
st.title("🧠 AI Personal Expense Categorizer")

# 🔹 Show available categories in sidebar or on top
with st.expander("🧾 View Available Categories"):
    st.write("This app was trained to recognize the following categories:")
    for cat in categories:
        st.markdown(f"- **{cat}**")

# 🔹 Input field
desc = st.text_input("Enter an expense description:")

if st.button("Predict Category"):
    if desc.strip():
        vec = vectorizer.transform([desc])
        pred = model.predict(vec)
        category = le.inverse_transform(pred)
        st.success(f"Predicted Category: **{category[0]}**")
    else:
        st.warning("Please enter a description.")
