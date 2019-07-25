import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import {
  SEARCH_ARTIST, GET_GRAPH_DATA, SEARCH_DISEASE, GET_DISEASE_GRAPH_DATA,
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
    graphLevel: 1,
    showAlwaysLabel: false,
    linkResolution: 6,
    linkCurvature: 0,
    linkCurveRotation: 0,
    labelSize: 5,
  });

  const graphqlClient = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_API,
  });


  const searchArtist = async (query) => {
    const { data } = await graphqlClient.query({
      query: SEARCH_ARTIST(query),
    });

    const { results } = data.artistSearch;
    setSearchResult(results);
    return results;
  };

  const searchDisease = async (query) => {
    const { data } = await graphqlClient.query({
      query: SEARCH_DISEASE(query),
    });

    const { results } = data.diseaseSearch;
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

  const getGraphDataDisease = async (id) => {
    const { data } = await graphqlClient.query({
      query: GET_DISEASE_GRAPH_DATA(id, graphViewConfig.graphLevel),
    });

    setGraphData(data.diseaseGraph.graph);
  };

  return (
    <HomeView
      search={searchArtist}
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
