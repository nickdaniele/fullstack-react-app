import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = React.createClass({
  render() {
    return (
      <div className="search">
        <div>
          {preload.shows.map(show => {
            return <ShowCard show={show} />;
          })}
        </div>
      </div>
    );
  }
});

export default Search;
