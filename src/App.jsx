import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings')

  // selectedVideo(response.data.items[0])
  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])
  
  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  return (
    <>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
