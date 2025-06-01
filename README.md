# 🎓 Internship Listing App

A simple and responsive web app built with React that helps users browse and filter internship opportunities based on *profile, **location, and **duration*. All filtering happens right in the browser — no extra API calls!

---

## 🔍 What It Does

- Pulls internship listings from an external API
- Displays the listings in card format
- Lets users filter internships by:
  - Internship profile (title)
  - Location
  - Duration
- Everything is handled on the frontend — no server-side filtering
- Clean, responsive layout that works across screen sizes

---
## 📁 Project Structure

📦INTERNSHALA/
┣ 📂node_modules/                   # Project dependencies
┣ 📂public/                         # Static assets
┣ 📂src/                            # Source code
┃ ┣ 📂Components/                  # Reusable UI components
┃ ┃ ┣ 📂JobBlock/                  # Job-related components
┃ ┃ ┃ ┣ 📜FilterBar.css           # Styles for FilterBar
┃ ┃ ┃ ┣ 📜FilterBar.jsx           # Filter bar component with dropdowns
┃ ┃ ┃ ┣ 📜JobBlock.css            # Styles for JobBlock
┃ ┃ ┃ ┗ 📜JobBlock.jsx            # Main job block rendering internships
┃ ┃ ┗ 📂NavBar/                    # Navigation bar component
┃ ┃   ┗ 📜NavBar.jsx              # Top navbar component
┃ ┣ 📜App.css                      # Global App styles
┃ ┣ 📜App.js                       # Root component with routing or state logic
┃ ┣ 📜index.css                    # Base styles
┃ ┣ 📜index.js                     # ReactDOM entry point
┣ 📜.gitignore                     # Files/folders to ignore in Git
┣ 📜package-lock.json             # Dependency lockfile (npm)
┣ 📜package.json                  # Project metadata and dependencies
┗ 📜README.md                     # Project documentation


Install dependencies:
npm install

Start the development server:
npm start
Open http://localhost:3000 in your browser.

🔧 Tech Stack

React.js
Axios (for API calls)
HTML/CSS
JavaScript (ES6+)

📦 API Info

The app fetches data from:

https://internshala.com/hiring/search

🛠 Future Improvements

Add pagination
Add search by keyword
Integrate loading spinners
Use Material UI for better UI components
Save filters to local storage