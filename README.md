
---

# CNAPP Dashboard

## Project Overview

This project is a dynamic dashboard built with Next.js, Shadcn UI, and Redux. The dashboard allows users to manage widgets within different categories. Users can add, remove, and search for widgets dynamically.

### Features

- **Add/Remove Widgets**: Users can add and remove widgets within categories.
- **Search Functionality**: Filter widgets by name across all categories.
- **Responsive Design**: The dashboard is fully responsive and adjusts to different screen sizes.

## Project Structure

- **components/**: Contains all the UI components used in the project, including `Dashboard` and `AddWidget`.
- **redux/**: Manages state with Redux. The `dashboardSlice.js` contains actions and reducers for managing widgets and categories.
- **pages/**: Holds the main application page, including `page.jsx` which renders the dashboard.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Shadcn UI**: A collection of reusable UI components styled with Tailwind CSS.
- **Redux**: State management for managing the dashboard’s data and UI state.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn

### Steps to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/ShreyoPaul/-Accuknox.git
   cd dashboard-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Project Files

### 1. `Dashboard.js`

- The main dashboard component displays categories and their associated widgets.
- Users can search for widgets, add new widgets to categories, or remove existing widgets.

### 2. `AddWidget.js`

- A modal component that allows users to add new widgets to a selected category.
- Handles user input for widget name and description.

### 3. `redux/dashboardSlice.js`

- This file contains the Redux slice for managing the dashboard's state.
- Defines actions such as `addWidget`, `removeWidget`, and `searchWidgets`.

### 4. `page.jsx`

- The main page component that imports and renders the `Dashboard` component.


## Usage Instructions

### Adding a Widget

1. Click on the `+ Add Widget` button within any category.
2. Fill out the widget name and description in the modal that appears.
3. Click "Add" to add the widget to the selected category.

### Removing a Widget

- Click the `x` icon on the widget card to remove it from the category.

### Searching Widgets

- Use the search bar at the top of the dashboard to filter widgets by name across all categories.

## UI Components

- **Input**: Used for searching widgets.
- **Button**: Triggers actions like opening the add widget modal or submitting forms.
- **Avatar**: Displays user avatars in the header.
- **Select**: Dropdown component for selecting time ranges.
- **Card**: Container for each widget, displaying its name and description.

## Styling

The project uses Tailwind CSS for styling. Shadcn UI components are styled with Tailwind's utility-first classes, ensuring a consistent and responsive design.

## License

This project is open-source and available under the MIT License.

---
