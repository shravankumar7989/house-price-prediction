
const form = document.getElementById("prediction-form");
const result = document.getElementById("result");
const predictedPrice = document.getElementById("predicted-price");
const resultMessage = document.getElementById("result-message");
const predictButton = document.getElementById("predict-button");

// Run this function whenever the user submits the form
form.addEventListener("submit", async function (event) {

    // Stop the browser from refreshing the page
    event.preventDefault();

    // Collect the nine input values
    const house = {
        Area_sqft: Number(document.getElementById("area").value),
        Bedrooms: Number(document.getElementById("bedrooms").value),
        Bathrooms: Number(document.getElementById("bathrooms").value),
        House_Age: Number(document.getElementById("age").value),
        Distance_to_City_km: Number(document.getElementById("distance").value),
        Parking_Spaces: Number(document.getElementById("parking").value),
        Floor: Number(document.getElementById("floor").value),
        Crime_Score: Number(document.getElementById("crime").value),
        School_Rating: Number(document.getElementById("school").value)
    };

    // Show a loading message
    predictButton.disabled = true;
    predictButton.textContent = "Predicting price...";
    result.classList.remove("hidden");
    predictedPrice.textContent = "Calculating...";
    resultMessage.textContent = "Your house details are being analyzed.";

    try {

        // Send the house details to the Flask backend
        const response = await fetch("/predict", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(house)
});

        // Convert Flask's JSON response into a JavaScript object
        const data = await response.json();

        // Handle errors returned by Flask
        if (!response.ok) {
            throw new Error(data.error || "Prediction failed.");
        }

        // Display the predicted house price
        predictedPrice.textContent =
            "₹" + Number(data.predicted_price_lakhs).toFixed(2) + " Lakhs";

        resultMessage.textContent =
            "Prediction completed successfully using your trained ML model.";

    } catch (error) {

        // Display a useful error message
        predictedPrice.textContent = "Prediction unavailable";
        resultMessage.textContent =
            "Could not connect to the prediction server. " + error.message;

        console.error("Prediction error:", error);

    } finally {

        // Restore the button whether the request succeeds or fails
        predictButton.disabled = false;
        predictButton.innerHTML = 'Predict House Price <span aria-hidden="true">→</span>';

    }

});
