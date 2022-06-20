import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map((actorMovie) => (
            <li key={actorMovie}>{actorMovie}</li>
          ))}
        </ul>
      </div>
    );
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
