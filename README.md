## Versions used:

* **Node.js:** v22.18.0
* **npm:** 10.9.3

## Requirements

* **Node.js** (version 18+ recommended)
* **npm** (comes bundled with Node)

---

## Getting Started

Follow the steps below to set up and run the project locally.

---

## 1. Clone the Repository

```bash
git clone https://github.com/pedro-arimura/tmdb-page.git
cd tmdb-page
```

---

## 2. Install Dependencies

Install all required packages:

```bash
npm install
```

---

## 3. Environment Variables

Create a `.env` file in the project root.

You can copy the template:

```bash
cp .env.example .env
```

Open `.env` and fill in the required values (e.g., API keys).

---

## 4. Running the Application

Start the local development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

## 5. Running Tests

To execute all automated tests, run:

```bash
npm run test
```

This will run the test suite using your configured test runner (e.g., Jest).

---

### Future improvements

For this project, if we want better performance or want to avoid making a new request to the API every time the home page renders, we should use SWR on the home page (specifically in the fetch for popular movies). This would lead to improved performance at scale.

We could also add React Suspense to handle loading states while the system fetches movie data, and implement infinite scroll on the home page to continuously load more movies as the user scrolls down.