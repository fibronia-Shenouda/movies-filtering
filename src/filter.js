import { useEffect } from "react";

export function Filter({
  setActiveGenere,
  activeGenere,
  popular,
  setFiltered,
}) {
  useEffect(() => {
    if (activeGenere === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenere)
    );
    setFiltered(filtered);
  }, [activeGenere]);
  return (
    <div className="filter-container">
      <button
        className={activeGenere === 0 ? "active" : ""}
        onClick={() => setActiveGenere(0)}
      >
        All
      </button>
      <button
        className={activeGenere === 35 ? "active" : ""}
        onClick={() => setActiveGenere(35)}
      >
        Commedy
      </button>
      <button
        className={activeGenere === 28 ? "active" : ""}
        onClick={() => setActiveGenere(28)}
      >
        Action
      </button>
    </div>
  );
}