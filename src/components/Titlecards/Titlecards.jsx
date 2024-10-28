import React, { useEffect, useRef, useState } from "react";
import "./Titlecards.css";
import cards_data from "../../assets/cards/Cards_data";

const Titlecards = ({ title, category }) => {


  const [apidata,setapidata] = useState([])
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTIwODQyMjk3YTk2NDZjMmY3M2YyMzVlZmRmZmFhMCIsIm5iZiI6MTczMDEyNzE0Ni42NzY3OSwic3ViIjoiNjcxZmEzZTM2ZTQyMTA3ODBmNzk4NzU4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.A8z1W2wTeIZOWvQcgmliv15Se7_0ghgodc4bt9w-qQE",
    },
  };

  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapidata(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handlewheel);
  }, []);
  return (
    <div className="Title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Titlecards;
