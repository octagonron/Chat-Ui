# Chat Widget

A simple Express-based server application for handling task submissions via a REST API. This application receives tasks, processes them by calling an external API, and serves a basic HTML page.

## Features

- **Task Submission Endpoint**: Receives tasks via a POST request and processes them using an external API.
- **Express Server**: Handles routing and serves static HTML files.
- **Error Handling**: Provides basic error handling for failed API requests.

## Prerequisites

- [Node.js](https://nodejs.org/) (v10.0.0 or higher recommended)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/octagonron/Chat-Ui.git
    ```

2. Navigate to the project directory:
    ```bash
    cd chat-widget
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Set up your environment variables:
    - Create a `.env` file in the root directory.
    - Add your API key and any other configuration details:
        ```env
        PORT=3000
        API_KEY=your_api_key_here
        ```

2. Start the server:
    ```bash
    node chat.js
    ```

3. Open your browser and go to `http://localhost:3000` to see the HTML page.

4. Use a tool like [Postman](https://www.postman.com/) or `curl` to send a POST request to `http://localhost:3000/api/send-task` with the task data.

    Example using `curl`:
    ```bash
    curl -X POST http://localhost:3000/api/send-task -H "Content-Type: application/json" -d '{"task": "Your task here"}'
    ```

## API

### POST /api/send-task

- **Description**: Receives a task and forwards it to an external API for processing.
- **Request Body**:
    - `task` (string): The task to be processed.
- **Response**:
    - `message` (string): Response message from the external API or error message.

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **body-parser**: Node.js body parsing middleware.
- **node-fetch**: A light-weight module that brings window.fetch to Node.js.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## Acknowledgements

- Thanks to the developers of [Express](https://expressjs.com/) for their powerful framework.
- Special thanks to the team behind [node-fetch](https://www.npmjs.com/package/node-fetch).

