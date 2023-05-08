import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import youtube from "./components/api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  const [videos, setVideos] =useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("buildings")
  }, [])

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    selectedVideo(response.data.items[0])
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
