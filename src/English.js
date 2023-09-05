import "./App.css";
import { useEffect, useState } from "react";
import { Movie } from "./movies";
import { Filter } from "./filter";
import { motion, AnimatePresence } from "framer-motion";

export function English() {
  useEffect(() => {
    fetchPopular();
  }, []);

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenere, setActiveGenere] = useState(0);

  const api_key = "74f2ed1b9bbe29ce3d184a86f1517551";
  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenere={activeGenere}
        setActiveGenere={setActiveGenere}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movies) => {
            return <Movie key={movies.id} movie={movies} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

