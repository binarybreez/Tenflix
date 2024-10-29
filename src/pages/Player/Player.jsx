import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const [apidata, setapidata] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const {id} = useParams();

  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTIwODQyMjk3YTk2NDZjMmY3M2YyMzVlZmRmZmFhMCIsIm5iZiI6MTczMDEyODU1OS4yNzUxMTcsInN1YiI6IjY3MWZhM2UzNmU0MjEwNzgwZjc5ODc1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X3xixbc0_1pqEmwsqOgMAIaFmxYBVuHv6u9pUzeRkpM",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
      )
      .then((res) => res.json())
      .then((res) => setapidata(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
};
export default Player;
