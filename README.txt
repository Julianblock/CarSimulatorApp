

# 🚗 Car Simulator + Sequence Engine – Full Stack Coding Challenge  
**Author:** Julian Block  
**Stack:** Python • Flask • JavaScript • Chart.js • CSS • HTML


**THE ORIGINAL CHALLENGE** as sent to me with a 3 hour time limit

This folder contains 2 Python files. Each Python file corresonds to an assignment.
Your goal is to complete the assignments and to return the files in a format that can be easily executed.

If you prefer to solve these assignments in a language that is not Python, it's totally ok to do so.
However, you'll have to rewrite the assigments in your preferred language and add instructions on how to execute the programs.

Note: Besides the correctness of the solutions, we will evaluate code style and clarity.

Good Luck!

---

## 🧩 Overview

This project contains solutions to a two-part technical challenge involving:

1. A **2D vehicle simulator** with physics-based motion
2. A **custom numerical sequence calculator** with performance optimizations

It’s powered by a Flask backend and a modern browser-based frontend that includes dark mode styling, live charting, and asynchronous API interaction. Built to showcase full-stack skills, clean architecture, and real-time visualization.

---

## 🔧 Tech Stack

| Layer        | Tech                                    |
|--------------|-----------------------------------------|
| Backend      | Flask, Python, CORS                     |
| Frontend     | HTML, JavaScript, Chart.js              |
| Styling      | Custom CSS (Dark Theme + Loading UI)    |
| APIs         | `/simulate`, `/sequence/<n>` endpoints  |
| UX           | Async fetch, error handling, loading screen |

---

## 💡 Features

### 🚗 Car Simulator
- Simulates acceleration, steering, and turn radius over time
- Returns trajectory (x, y, velocity, angle) over a configurable time span
- Plotted using **Chart.js** on a dark-themed interactive web UI

### 🔢 Sequence Engine
- Computes the n-th term in a recurrence:  
  `S_n = 3 * S_(n-1) - S_(n-2)`  
- Time optimized to handle **n = 100,000+** using constant space
- API endpoint returns result instantly for arbitrary n

---

## 📸 UI Preview

### 🧭 Trajectory Simulation  
![Trajectory Chart](./screenshots/trajectory.png)  
*Visualizes the car’s position over time as it accelerates and turns*

### ⏳ Loading + Input  
![Loading Screen](./screenshots/loading.png)  
*Dark mode interface with asynchronous updates*

---

## 🚀 Run Locally

```bash
# Install dependencies (Flask required)
pip install flask flask-cors

# Run the app
python app.py

