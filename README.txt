# 🚗✨ Car Simulator + Sequence Engine – Full Stack Coding Challenge  
**Author:** Julian Block  
**Stack:** Python • Flask • JavaScript • Chart.js • CSS • HTML  

---

## 🎯 The Challenge  

This repository contains solutions to a two-part technical challenge:  

1. **2D Vehicle Simulator** – Simulates motion with physics-based calculations.  
2. **Custom Sequence Calculator** – Computes terms in a recurrence relation with optimized performance.  

The goal was to deliver clean, functional, and well-documented code within a 3-hour time limit.  

---

## 🧩 Project Overview  

This project showcases:  
- 🚀 Full-stack development skills  
- 🛠️ Clean architecture and modular design  
- 📊 Real-time data visualization  

---

## 🔧 Tech Stack  

| **Layer**    | **Technology**                          |
|--------------|-----------------------------------------|
| Backend      | Flask, Python, CORS                     |
| Frontend     | HTML, JavaScript, Chart.js              |
| Styling      | Custom CSS (Dark Theme + Loading UI)    |
| APIs         | `/simulate`, `/sequence/<n>` endpoints  |
| UX           | Async fetch, error handling, loading UI |

---

## 💡 Features  

### 🚗 **Car Simulator**  
- Simulates acceleration, steering, and turn radius over time.  
- Returns trajectory data: `(x, y, velocity, angle)` over a configurable time span.  
- Visualized using **Chart.js** on a dark-themed, interactive web UI.  

### 🔢 **Sequence Engine**  
- Computes the n-th term in a recurrence relation:  
  `S_n = 3 * S_(n-1) - S_(n-2)`  
- Optimized for **n = 100,000+** using constant space.  
- API endpoint returns results instantly for arbitrary `n`.  

---

## 📸 UI Previews  

### 🧭 **Trajectory Simulation**  
![Trajectory Chart](./screenshots/trajectory.png)  
*Visualizes the car’s position over time as it accelerates and turns.*  

### ⏳ **Loading + Input**  
![Loading Screen](./screenshots/loading.png)  
*Dark mode interface with asynchronous updates.*  

---

## 🚀 Getting Started  

### 🛠️ **Run Locally**  

```bash
# Install dependencies (Flask required)
pip install flask flask-cors

# Run the app
python app.py
```

### 🌐 **Access the App**  
Once running, open your browser and navigate to:  
`http://127.0.0.1:5000`  

---

## 📂 Folder Structure  

```plaintext
/CarSimulatorApp
├── app.py                # Main Flask application
├── static/               # Frontend assets (HTML, JS, CSS)
├── templates/            # HTML templates
├── screenshots/          # UI preview images
└── README.txt            # Project documentation
```

---

## 🏆 Why This Project?  

This project demonstrates:  
- **Backend mastery** with Flask and Python.  
- **Frontend expertise** with modern JavaScript and Chart.js.  
- **Optimization skills** for handling large-scale computations.  
- **Clean, maintainable code** with a focus on clarity and style.  

---

