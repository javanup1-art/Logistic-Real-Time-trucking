# Real-Time Logistics & Fleet Tracking System

A full-stack, production-ready logistics tracking solution featuring a real-time tracking system. It connects a mobile driver application with a centralized backend server to stream, process, and display live location data seamlessly, backed by a robust relational database.

## 🚀 Features
* **Live Location Streaming:** Real-time GPS coordinate streaming from mobile devices using WebSockets.
* **Full-Stack Architecture:** Powered by a high-performance Node.js backend and a cross-platform Flutter mobile client.
* **Low-Latency Updates:** Uses persistent bi-directional WebSocket connections for instantaneous location rendering.
* **Relational Data Management:** Structured SQL database handling users, drivers, active trips, and location logs with transaction safety.
* **Logistics Dashboard:** Designed to monitor fleets, manage active deliveries, and handle dispatch operations.

## 🛠️ Tech Stack
* **Backend:** Node.js, Express.js
* **Real-Time Communication:** WebSockets (`socket.io` or native WS)
* **Mobile Client:** Flutter (Dart)
* **Database:** SQL (PostgreSQL / MySQL) with an ORM like Sequelize or Knex.js
* **Maps API:** Google Maps API or OpenStreetMap

## 📁 Project Structure
```text
├── backend/            # Node.js Server Code
│   ├── src/
│   │   ├── config/     # SQL Database configuration & connection
│   │   ├── models/     # SQL schemas (Drivers, Users, Trips)
│   │   └── server.js   # Main entry point handling WebSockets
│   ├── package.json
│   └── README.md
└── mobile_app/         # Flutter Application Code
    ├── lib/
    ├── pubspec.yaml
    └── main.dart       # App initialization and state management
```

## 📊 Database Schema (SQL)
The relational schema is optimized for logistics operations, consisting of core tables:
* **Users / Drivers Table:** Stores authentication data, vehicle details, and active status.
* **Trips Table:** Logs source, destination, assigned driver, and current delivery status.
* **Location Logs Table:** Keeps a historical record of coordinates linked via Foreign Keys to active trips for route playback.

## ⚙️ Installation & Setup

### 1. Backend Setup (Node.js & SQL)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your SQL database credentials in the `.env` or config file.
4. Run migrations to set up tables:
   ```bash
   npm run migrate # (if using an ORM like Sequelize)
   ```
5. Start the server:
   ```bash
   npm start
   ```

### 2. Mobile App Setup (Flutter)
1. Navigate to the mobile app directory:
   ```bash
   cd mobile_app
   ```
2. Get Flutter packages:
   ```bash
   flutter pub get
   ```
3. Update the WebSocket server URL to match your running backend instance.
4. Run the application:
   ```bash
   flutter run
   ```

## 💡 How It Works
1. **Connection:** The Flutter app establishes a secure WebSocket connection to the Node.js server.
2. **Data Emission:** The driver's device captures GPS changes and emits location payloads.
3. **Ingestion & Persistence:** The Node.js backend processes the stream, instantly updates the live coordinates in the SQL database, and broadcasts updates to the admin dashboard.
4. **UI Update:** The frontend consumes the stream to update marker positions smoothly on the map interface.

## 📄 License
This project is open-source and licensed under the MIT License.
