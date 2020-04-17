import React, { Component } from "react";

class SingleSeries extends Component {
  state = {
    info: false
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ info: json }));
  }
  render() {
    const { info } = this.state;

    return (
      <div>
        <header className="App-header">
          <h1>About Serie - {info.name} </h1>
        </header>
        {info === false && <h4>Loading...</h4>}
        {info !== false && (
          <div className="About-serie">
            <a href={info.url} target="_blank" rel="noopener noreferrer">
              <img src={info.image.medium} alt={info.name} />
            </a>
            <h2>{info.name}</h2>
            <p>
              <b>Premiered</b> - {info.premiered}
            </p>
            <p>
              <b>Status</b> - {info.status}
            </p>
            <p>
              <b>Rating</b> -{" "}
              {info.rating.average === null
                ? "unrated"
                : info.rating.average + "/ 10"}
            </p>
            <p>
              <b>genres</b> - {info.genres.join(", ")}
            </p>
            <p>
              <b>Episodes</b> - {info._embedded.episodes.length}
            </p>
            <p>
              <b>Runtime</b> - {info.runtime + " mins"}
            </p>
            <p>
              <b>Summary</b> - {info.summary.replace(/<[^>]*>/g, "")}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSeries;
