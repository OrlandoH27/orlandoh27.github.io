# Orlando Haye - Personal Portfolio Website

Welcome to my personal portfolio website! This site showcases my skills, projects, and provides a way to contact me. Built with React and styled with Bootstrap, it features a clean, responsive design.

## Features

- **Navbar**: A guideline of the site that follows the user and links to parts of the page. It also uses icons to link to other websites.
- **About Me**: A section detailing my professional background and personal interests, featuring a profile picture and hobby buttons.
- **Projects**: A dynamic gallery showcasing my key projects, each with a title, description, and a link to the GitHub repository. Project cards are consistently sized with clear, readable text on a golden background.
- **Tech Stack**: A visual representation of the technologies I'm proficient in.
- **Contact Form**: A functional contact form powered by Formspree, allowing visitors to send me messages directly.
- **Responsive Design**: Optimized for viewing on various devices (desktop, tablet, mobile).
- **Custom Styling**: Utilizes a consistent color scheme of maroon, black, and a golden gradient (`linear-gradient(to bottom right, #B8860B, #FFD700)`) over a `blanchedalmond` background.

## Technologies Used

- **Frontend**:
  - React.js
  - TypeScript
  - Bootstrap 5 (for responsive layout and components)
  - `react-icons` (for icons like GitHub)
- **Form Handling**:
  - Formspree (for secure and reliable contact form submissions)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your system.

- [Node.js (includes npm)](https://nodejs.org/en/download/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL_HERE]
    cd [your-repo-name]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up Formspree (for the contact form):**
    - Go to [Formspree.io](https://formspree.io/) and create a free account.
    - Create a new form and copy your unique **Form Endpoint URL**.
    - Open `src/components/Contact.tsx` and replace `'YOUR_FORMSPREE_ENDPOINT_URL'` with your actual Formspree URL.

### Running the Development Server

To run the application in development mode:

```bash
npm run dev
```
