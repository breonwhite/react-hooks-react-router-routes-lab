import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map((director) => {
    return (
      <div key={director.name}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((directorMovie) => (
            <li key={directorMovie}>{directorMovie}</li>
          ))}
        </ul>
      </div>
    );
  })
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors;
