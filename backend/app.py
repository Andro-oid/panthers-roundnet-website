from flask import Flask
import datetime

x = datetime.datetime.now()

# Initializing Flask app
app = Flask(__name__)

# Route for seeing data
@app.route("/data")
def get_time():
    return {
        "Name": "Panther\'s Roundnet",
        "Age" : "1",
        "Date" : x,
        "Programming" : "python"
    }

if __name__ == '__main__':
    app.run(debug=True)