from flask import send_from_directory
from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# 1. Load our saved model bundle
bundle = joblib.load("models/house_price_bundle.joblib")

model = bundle["model"]
scaler = bundle["scaler"]
feature_names = bundle["feature_names"]

@app.route("/")
def home():
    return send_from_directory("frontend", "index.html")


@app.route("/<path:filename>")
def frontend_files(filename):
    return send_from_directory("frontend", filename)

# 2. Create a prediction API
@app.route("/predict", methods=["POST"])
def predict():

    try:
        # Receive input data from the website
        data = request.get_json()

        # Arrange inputs in the same column order used during training
        input_data = pd.DataFrame(
            [[data[name] for name in feature_names]],
            columns=feature_names
        )

        # Scale the input using the EXISTING fitted scaler
        scaled_data = scaler.transform(input_data)

        # Predict the house price
        prediction = model.predict(scaled_data)[0]

        # Send the result back to the website
        return jsonify({
            "predicted_price_lakhs": round(float(prediction), 2)
        })

    except (KeyError, TypeError, ValueError) as error:
        return jsonify({"error": str(error)}), 400


# 3. Start the Flask server


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
