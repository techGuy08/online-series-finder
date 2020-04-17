import React from "react";
import { Link } from "react-router-dom";

const SeriesListItem = ({ series }) => (
  <Link to={`/series/${series.show.id}`}>
    <li>{series.show.name}</li>
  </Link>
);
const SeriesList = props => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map(results => (
          <SeriesListItem series={results} key={results.show.id} />
        ))}
      </ul>
    </div>
  );
};
export default SeriesList;
