
import requests

url = "http://127.0.0.1:5000/predict"

house = {
    "Area_sqft": 1500,
    "Bedrooms": 3,
    "Bathrooms": 2,
    "House_Age": 5,
    "Distance_to_City_km": 4,
    "Parking_Spaces": 1,
    "Floor": 2,
    "Crime_Score": 3,
    "School_Rating": 8
}

response = requests.post(url, json=house)

print("Status code:", response.status_code)
print("Response:", response.json())
