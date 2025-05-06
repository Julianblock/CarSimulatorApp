from flask import Flask, jsonify, request
from flask_cors import CORS
from car_simulator import CarSimulator
from sequence import sequence_calculator
import math

app = Flask(__name__)
CORS(app)

@app.route('/simulate', methods=['GET'])
def simulate():
    wheelbase = 4
    v0 = 0
    theta0 = 0
    dt = 0.1
    simulator = CarSimulator(wheelbase, v0, theta0)

    # Get time_elapsed parameter from the query string, default to 100
    time_elapsed_limit = float(request.args.get('time_elapsed', 100))

    trajectory = []
    time_elapsed = 0

    while time_elapsed <= time_elapsed_limit:
        if simulator.v < 10:
            simulator.simulatorStep(0.4, 0, dt)
        else:
            simulator.simulatorStep(0, -math.radians(1), dt)

        trajectory.append({
            'time': time_elapsed,
            'x': simulator.x,
            'y': simulator.y,
            'v': simulator.v,
            'theta': simulator.theta
        })
        time_elapsed += dt

    return jsonify(trajectory)

@app.route('/sequence/<int:n>', methods=['GET'])
def sequence(n):
    result = sequence_calculator(n)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
