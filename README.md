![IMG_20210430_165321 (3)](https://github.com/Kelvin-Ben/Video-app/assets/85459676/3b2a017e-bb01-4fd4-8061-717dd2277234)

# Video Application
The Video Application is a small web application built with React that serves as a clone of YouTube. It showcases the usage of React hooks, both with functional components and class components. The application also demonstrates how to fetch data from an API using the Axios library.
### Features
- **Video Search:** Users can search for videos by entering keywords in the search bar.
- **Video Display:** The application displays a list of videos based on the user's search query.
- **Video Playback:** Users can select a video from the list and watch it within the application.
- **React Hooks:** The application utilizes React hooks, such as useState and useEffect, to manage state and perform side effects.
- **Class and Functional Components:** The application showcases both class-based and functional components to highlight different component styles.
- **Data Fetching with Axios:** Videos are fetched from an external API using the Axios library to demonstrate data retrieval.
- https://www.loom.com/share/bc947e4311014c2baeb14255ca8dcc81

### Live Demo
**Interact with the app [here](https://videos-flax.vercel.app/)**

### Getting Started
> To set up and run the Video Application locally, follow these steps:
- **Clone the repository:** Clone this repository to your local machine using the command:
```
git clone https://github.com/your-username/video-application.git
```
- **Install dependencies:** Navigate to the project directory and install the required dependencies by running:
```
npm install
```
- **API Key:** Obtain an API key from the YouTube Data API. You can follow the instructions provided by YouTube to generate an API key.
- Configure environment variables: Create a .env file in the project root directory and add the following line, replacing YOUR_API_KEY with your actual YouTube Data API key:
```
REACT_APP_API_KEY=YOUR_API_KEY
```
- **Start the application:** Launch the application by running the following command:
```
npm run dev
```
*This will start the development server, and you can access the application in your browser at `http://localhost:3000.`*
### Technologies Used
- **React:** The primary JavaScript library used for building the user interface and managing application state.
- **Axios:** Used for making HTTP requests to the YouTube Data API and retrieving video data.
- **HTML and CSS:** Used for structuring the user interface and styling the application.
### Contributing
Contributions to the Video Application are welcome! If you encounter any issues, have suggestions for improvements, or would like to contribute new features, please feel free to submit a pull request.
### License
The Video Application is open source and released under the [MIT License](https://opensource.org/license/mit/). You are free to modify, distribute, and use the code for your own purposes.
