import React from "react";

const FavoriteShows = ({ shows }) => {
  return (
    <div className="FavoriteShows">
      <h1>My Favorite Shows</h1>
      <div className="FavoriteShows__shows row">
        {shows
          .filter(show => show.category === "broadway")
          .map(show => (
            <a href={show.url} className="Show col" key={show.title}>
              <img className="Show__poster" src={show.poster} />
              <div className="Show__title">{show.title}</div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default FavoriteShows;
