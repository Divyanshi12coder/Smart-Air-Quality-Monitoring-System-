# 🌍 Smart Air Quality Monitoring System

An IoT-based solution to monitor and analyze air quality in real-time, providing actionable insights on pollutants, environmental conditions, and location-based trends.

## 📌 Overview

The Smart Air Quality Monitoring System continuously tracks air pollutants and environmental parameters using IoT sensors. It delivers real-time Air Quality Index (AQI) data via a mobile/web dashboard, enabling timely alerts and preventive actions to reduce health risks and pollution levels.

## 🎯 Key Features

- 📊 Real-time monitoring of pollutants: PM2.5, PM10, CO₂, CO, NO₂
- 🌡️ Temperature and humidity sensing
- 🖥️ Mobile/Web dashboard with live AQI visualization
- 🚨 Alerts and notifications on threshold breaches
- 📈 Historical data logging and trend analysis
- 📍 GPS-based location tagging for each device
- ☀️ Solar-powered or low-energy hardware options

## 🛠️ Project Agenda

1. Identify parameters and sensors (e.g., MQ135, DHT11, PMS5003)
2. Select microcontroller (ESP32/Arduino) and communication method (Wi-Fi/Bluetooth)
3. Connect to cloud platform for data storage and visualization
4. Build mobile/web dashboard to display AQI in real time
5. Implement alert systems (email, SMS, app notifications)
6. Test system under various environmental conditions
7. Optimize for energy efficiency and deploy in test locations

## 🚀 Future Scope

- Integration with smart city infrastructure and government dashboards
- Predictive analytics using AI/ML for pollution forecasting
- Drone-based mobile AQI monitoring units
- Indoor/outdoor hybrid monitoring with dynamic control (e.g., smart purifiers)
- Citizen participation through crowd-sourced pollution mapping

## 🧰 Technical Stack

| Layer         | Technology Used                          |
|--------------|-------------------------------------------|
| **Hardware** | ESP32, MQ135, DHT11, GPS Module           |
| **Comm**     | MQTT, HTTP, Wi-Fi, GSM                    |
| **Cloud**    | ThingsBoard                               |
| **Frontend** | React.js                                  |
| **Backend**  | Node.js                                   |
| **Database** | Firebase Realtime DB                      |
| **Mapping**  | Google Maps API                           |


