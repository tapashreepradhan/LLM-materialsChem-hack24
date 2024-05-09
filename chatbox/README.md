# Simple Chatbot Interface

This Node.js application demonstrates a simple chatbot interface that communicates with a Large Language Model (LLM) such as OpenAI's GPT models. The application uses Express for the backend and serves a simple HTML/CSS/JS frontend.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm (usually comes with Node.js)

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**
    ```bash
    git clone https://your-repository-url.git
    cd path-to-your-project

2. **Install Dependencies:**
    ```bash
    # Navigate to the project directory and run
    npm install

3. **Set Up Environment Variables**

    ```bash 
    # Add the following line to your .env file, replacing your_llm_api_url with # the actual API URL you intend to use:
    LLM_API_URL=your_llm_api_url

## Running the Application

To run the application, execute the following command in the root directory of your project

    ```bash 
    npm start
    ```
This will start the server on http://localhost:3000. Open your web browser and navigate to this address to interact with the chatbot.

## Deploying to Production:

1. **Set Environment Variables on Heroku**

Set the LLM API URL in Heroku's config vars:

    ```bash 
    heroku config:set LLM_API_URL=your_llm_api_url
    ```

2. **Deploy the Application**

Push your code to Heroku:

    ```bash
    git push heroku main
    ```

After deploying, your application should be accessible via the URL provided by Heroku.