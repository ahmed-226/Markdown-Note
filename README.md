
## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ahmed-226/Markdown-Note.git
    cd Markdown-Note
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables.

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. For development, you can use:
    ```sh
    npm run dev
    ```

3. Use the following endpoints to interact with the application:

    - **Upload a Markdown file**:
        ```http
        POST /api/upload
        Content-Type: multipart/form-data
        file: <file>
        ```

    - **Save a Markdown file**:
        ```http
        POST /api/save
        Content-Type: application/json
        {
          "fileName": "example",
          "content": "## Example Content"
        }
        ```

    - **Convert Markdown content to HTML**:
        ```http
        POST /api/convert
        Content-Type: application/json
        {
          "content": "## Example Content"
        }
        ```

## Project Files

- **app.js**: Entry point of the application.
- **config/multer.js**: Configuration for file uploads using Multer.
- **controllers/markdown.controller.js**: Controller for converting Markdown content to HTML.
- **controllers/save.controller.js**: Controller for saving Markdown files.
- **controllers/upload.controller.js**: Controller for uploading Markdown files.
- **Routes/api.js**: API routes for the application.
- **uploads/**: Directory where uploaded files are stored.

## Dependencies

- axios
- dotenv
- express
- marked
- multer
- showdown

## License

This project is licensed under the ISC License.