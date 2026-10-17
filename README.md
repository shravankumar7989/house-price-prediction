# 🏠 House Price Prediction Web App

A machine learning web application that predicts house prices based on property characteristics and location-related features. Users enter the details of a house through a web form and receive an estimated price in lakhs.

## 🌐 Live Demo

**Try the application:** https://house-price-prediction-7ao5.onrender.com/

## ✨ Features

- Predicts estimated house prices through a web interface.
- Accepts nine input features describing a property.
- Uses a trained K-Nearest Neighbors (KNN) regression model.
- Applies feature scaling before generating predictions.
- Returns predictions through a Flask API.
- Provides a browser-based interface built with HTML, CSS, and JavaScript.

## 🛠️ Technologies Used

- **Python** — machine learning and backend development
- **Pandas** — handling structured input data
- **NumPy** — numerical operations
- **Scikit-learn** — KNN regression and feature scaling
- **Flask** — backend API and serving the frontend
- **HTML, CSS, JavaScript** — frontend development
- **Joblib** — saving and loading the trained model bundle
- **Gunicorn** — production application server
- **Render** — deployment and hosting
- **Git and GitHub** — version control and source code management

## 📊 Input Features

The application uses the following nine features:

| Feature | Description |
|---|---|
| `Area_sqft` | House area in square feet |
| `Bedrooms` | Number of bedrooms |
| `Bathrooms` | Number of bathrooms |
| `House_Age` | Age of the house |
| `Distance_to_City_km` | Distance from the city in kilometres |
| `Parking_Spaces` | Number of parking spaces |
| `Floor` | Floor number |
| `Crime_Score` | Crime-related score in the dataset |
| `School_Rating` | School rating in the dataset |

**Prediction target:** `Price_Lakhs`

## 🤖 Machine Learning Workflow

1. Prepare the dataset and select the input features and target variable.
2. Train a K-Nearest Neighbors regression model.
3. Fit a `StandardScaler` to scale the input features.
4. Save the trained model, scaler, and feature names in a Joblib bundle.
5. Load the saved bundle in the Flask application.
6. Receive house details from the frontend.
7. Convert the input into a DataFrame with the expected feature order.
8. Scale the input using the saved scaler.
9. Generate the predicted price and return it as JSON.
10. Display the result on the webpage.

## 📁 Project Structure

```text
house-price-predictor/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── models/
│   └── house_price_bundle.joblib
├── app.py
├── requirements.txt
├── test_api.py
├── .gitignore
└── README.md
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/shravankumar7989/house-price-prediction.git
cd house-price-predictor
```

### 2. Create a virtual environment

```bash
python -m venv .venv
```

Activate it on Windows:

```powershell
.\.venv\Scripts\Activate.ps1
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Start the application

```bash
python app.py
```

Open `http://127.0.0.1:5000/` in your browser.

## 🔌 Prediction API

**Endpoint:** `/predict`

**Method:** `POST`

**Content type:** `application/json`

The endpoint accepts the nine house features as JSON, applies the saved scaler, and returns a predicted price.

Example response:

```json
{
  "predicted_price_lakhs": 45.67
}
```

The number above is an illustrative example, not a verified prediction from the live application.

## ☁️ Deployment

The application is deployed on Render. The frontend and Flask API are served from the same application, allowing the frontend to send prediction requests to the relative `/predict` endpoint.

## ⚠️ Disclaimer

Predictions are estimates produced by a machine learning model trained on a particular dataset. They should not be treated as professional property valuations or guaranteed market prices.

## 👨‍💻 Author

**Shravan Kumar**

GitHub: https://github.com/shravankumar7989
