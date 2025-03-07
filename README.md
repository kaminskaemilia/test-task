# Welcome the App 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## 🚀 About the App

This app is designed to help users manage their workout plans efficiently. It provides features such as:
- Creating and customizing workout plans
- Tracking exercises with visual representations
- Drag-and-drop functionality for rearranging exercises

## 📌 Prerequisites

Before running the app, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended) (v18.14.0 was used for developing)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Android Emulator / iOS Simulator

## 🛠️ Setup Instructions

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Create an `.env` file

Create a `.env` file in the root directory and add the following environment variable:

```env
EXPO_PUBLIC_API_URL=https://api-dev.wpfcoaching.de/
```

### 3️⃣ Start the app

Run the following command to start the Expo development server:

```bash
expo run ios
```

### 4️⃣ Open the app on a device/emulator

Once the server starts, you can open the app in different environments:

- 📱 **Development Build**: Run the app in a custom Expo Dev Client.
- 🤖 **Android Emulator**: Open the app using an Android emulator.
- 🍏 **iOS Simulator**: Open the app on an iOS simulator.
- 🟢 **Expo Go**: Scan the QR code using the Expo Go app (for limited sandbox testing).

## 🔄 Reset the Project

If you want a fresh start, run:

```bash
npm run reset-project
```

This will move the starter code to the **app-example** directory and create a blank **app** directory for development.

