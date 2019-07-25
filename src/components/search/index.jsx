/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { SearchContainer, SearchBar } from './styles';

const Search = ({ search, searchResult = [], getGraphData }) => {
  const input = React.createRef();

  return (
    <SearchContainer>
      <label>Busca un artista</label>
      <SearchBar>
        <input name="query" type="text" ref={input} />
        <button
          type="button"
          onClick={() => {
            search(input.current.value);
          }}
        >
          {'Buscar'}
        </button>
      </SearchBar>

      <p>Resultados</p>
      <ul>
        {searchResult.map(({
          title, name, id,
        }) => (
          <li
            key={title || name}
            onClick={() => {
              getGraphData(id || name, 1);
            }}
          >
            {/* <img src={thumb} style={{ width: '30px' }} alt={title} />  */}
            {title || name}
          </li>
        ))}
      </ul>

    </SearchContainer>
  );
};


export default Search;
