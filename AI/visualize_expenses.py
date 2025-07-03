import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv("expenses.csv")

# Convert Date to datetime
df["Date"] = pd.to_datetime(df["Date"])

# ── Count of each category ──
plt.figure(figsize=(8, 5))
sns.countplot(x="Category", hue="Category", data=df, palette="Set2", legend=False)
plt.title("Expense Category Distribution")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# ── Total amount per category ──
plt.figure(figsize=(8, 5))
total_by_cat = df.groupby("Category")["Amount"].sum().reset_index()
sns.barplot(x="Category", y="Amount", data=total_by_cat, palette="coolwarm")
plt.title("Total Spending per Category")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# ── Pie chart ──
plt.figure(figsize=(6, 6))
plt.pie(total_by_cat["Amount"], labels=total_by_cat["Category"], autopct="%1.1f%%", startangle=140)
plt.title("Spending Breakdown by Category")
plt.tight_layout()
plt.show()

# ── Monthly trend ──
df["Month"] = df["Date"].dt.to_period("M")
monthly_total = df.groupby("Month")["Amount"].sum().reset_index()
plt.figure(figsize=(8, 4))
sns.lineplot(x="Month", y="Amount", data=monthly_total, marker="o")
plt.title("Monthly Expense Trend")
plt.tight_layout()
plt.show()
