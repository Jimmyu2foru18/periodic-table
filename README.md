# Interactive Periodic Table
[![Live Demo](https://img.shields.io/badge/Live_Demo-Available_-brightgreen)](https://jimmyu2foru18.github.io/periodic-table/) [![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-blue)](https://github.com/Jimmyu2foru18/periodic-table/deployments)

## Overview

**Interactive Periodic Table** is a web‑based application built with **HTML, CSS, and JavaScript** that displays the periodic table of elements in an interactive and informative format. Each element is color‑coded by category, and clicking on an element reveals its detailed properties with smooth transitions and responsive design.

---

## Features

- **Colored Element Tiles** — Each element is visually styled based on its category (e.g., metals, nonmetals)  
- **Clickable Elements** — Click any element tile to view its full details  
- **Smooth Transitions** — Animation that centers and enlarges the selected element  
- **Information Sidebar** — Shows properties such as name, symbol, atomic number, and more  
- **Responsive Layout** — Works on desktop and mobile browsers  

---

## Tech Stack

- **HTML5** — Markup and structure  
- **CSS3** — Styling and responsive layout  
- **JavaScript** — Interactivity and DOM manipulation  
- **JSON Data** — Element properties and metadata  

---

## Getting Started

These steps will help you run the project locally.

### Clone the Repository

~~~bash
git clone https://github.com/Jimmyu2foru18/periodic-table.git
cd periodic-table-webapp
~~~

### Open in Browser

1. Open the `index.html` file in your web browser.

### Optional: Run with a Local Web Server

If you have Python installed, you can serve the project locally:

~~~bash
python -m http.server 8000
~~~

Then visit `http://localhost:8000` in your browser to view the app.

---

## Usage

- Hover or scroll through the periodic table  
- Click any element to view its properties  
- Close the sidebar to return to the full table view  
- Explore trends and categories using the visual layout

---

## Project Structure

~~~text
periodic-table-webapp/
├── index.html         # Main HTML file
├── style.css          # Styles and layout
├── script.js          # JavaScript interactivity
├── elements.json      # Data source for element properties
└── README.md          # Project documentation
~~~

---
