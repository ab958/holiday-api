# Holiday API

This is a simple Node.js API that fetches holiday data for a given country and year from the Calendarific API. It includes endpoints for fetching holidays and supported countries. The API also implements in-memory caching to reduce redundant requests to the Calendarific API.

## Features

- **Fetch Holidays:** Retrieve holidays for a specified country and year.
- **Fetch Countries:** Get a list of supported countries from the Calendarific API.
- **Caching:** Caches holiday data for a specified period to minimize API requests.
- **Error Handling:** Provides meaningful error messages for invalid requests or API failures.
- **Unit Testing:** Comprehensive unit tests using Jest.

## Tech Stack

- **Node.js** with **Express.js**: For building the API.
- **Axios**: For making HTTP requests to the Calendarific API.
- **node-cache**: For in-memory caching.
- **dotenv**: For managing environment variables.
- **Jest**: For unit testing.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**
    ```bash
    https://github.com/ab958/holiday-api.git
    cd holiday-api
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:** Create a `.env` file in the root directory and add your Calendarific API key:
    ```plaintext
    CALENDARIFIC_API_KEY=your_calendarific_api_key_here
    ```

### Running the API

1. **Start the server:**
    ```bash
    npm run serve
    ```

2. **API Endpoints:**

    - **Fetch Holidays:**
        ```bash
        GET /api/holidays?country=PAK&year=2024
        ```
        - Query Parameters:
            - `country`: The country code (e.g., PAK for Pakistan).
            - `year`: The year for which to fetch holidays.
        - Response: A JSON array of holidays.

    - **Fetch Countries:**
        ```bash
        GET /api/countries
        ```
        - Response: A JSON array of supported countries.

### Running Tests

1. **Run tests using Jest:**
    ```bash
    npm test
    ```

2. **Watch files and run tests automatically:**
    ```bash
    npm test -- --watch
    ```

### Project Structure

```plaintext
.
├── __tests__            # Unit tests directory
│   └── api.test.js      # Test file for API endpoints
├── node_modules         # Node.js modules
├── cache.js             # Caching logic using node-cache
├── config.js            # Configuration setup
├── index.js             # Main server file
├── routes.js            # API routes
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
