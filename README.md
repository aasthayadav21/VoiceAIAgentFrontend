Voice AI Agent – Frontend

This is the frontend mobile application for the Voice AI Agent project. It is built using React Native, Expo, and Expo Router, and provides an authentication flow, tab navigation, and interactive pages like Explore and Try Now.

🚀 Features

🔐 Authentication – Login / Signup screen

🗂 Tabbed Navigation – Built with Expo Router

🌈 Explore Tab – Gradient background, description, and navigation buttons

Explore → Explore details page

Try Now → Interactive page with robot avatar card

🎨 Modern UI/UX – Styled with gradients, cards, and responsive layouts

📂 Project Structure
Frontend/
│── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx        # Tab navigation setup
│   │   ├── explore.tsx        # Explore screen with buttons
│   │   ├── explore-details.tsx# Explore details page
│   │   ├── try-now.tsx        # Try Now page with robot card
│   ├── _layout.tsx            # Root layout for navigation
│   ├── auth.tsx               # Authentication screen entry
│
│── components/
│   ├── AuthScreen.tsx         # Authentication UI component
│
│── constants/                 # App constants (colors, text, etc.)
│── hooks/                     # Custom hooks (if needed)
│── app.json                   # Expo config
│── package.json               # Dependencies
│── tsconfig.json              # TypeScript config
│── README.md                  # Project documentation

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/voice-ai-agent-frontend.git
cd voice-ai-agent-frontend


Install dependencies:

npm install

Create React Native App
npx create-expo-app Frontend
cd Frontend

Start the project:

npm start


Open on device:

Scan the QR code with the Expo Go app (Android/iOS)


📱 Screens Overview

Auth Screen → Login / Signup

Explore Tab → Gradient background, AI Agent description, Explore + Try Now buttons

Explore Details → More details with visuals

Try Now → Card with circular robot avatar