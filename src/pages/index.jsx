import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import {
  SEARCH_ARTIST, GET_GRAPH_DATA,
} from '../graphql/queries';
import HomeView from '../components/templates/home';

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [graphData, setGraphData] = useState(false);
  const [artistData, setArtistData] = useState({});
  const [graphViewConfig, setGraphViewConfig] = useState({
    linkWidth: 0.5,
    linkDirectionParticles: 4,
    linkOpacity: 0.5,
    linkColor: '#fff',
    graphLevel: 2,
    showAlwaysLabel: false,
    labelSize: 5,
  });

  const graphqlClient = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_API,
  });


  const search = async (query) => {
    const { data } = await graphqlClient.query({
      query: SEARCH_ARTIST(query),
    });

    const { results } = data.artistSearch;
    setSearchResult(results);
    return results;
  };

  const getGraphData = async (id) => {
    const { data } = await graphqlClient.query({
      query: GET_GRAPH_DATA(id, graphViewConfig.graphLevel),
    });

    setArtistData(data.graphConstruct.artist);
    setGraphData(data.graphConstruct.graph);
  };

  return (
    <HomeView
      search={search}
      getGraphData={getGraphData}
      graphData={graphData}
      config={graphViewConfig}
      updateConfig={setGraphViewConfig}
      searchResult={searchResult}
      artistData={artistData}
    />
  );
};
export default Home;
