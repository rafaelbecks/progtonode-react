import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import {
  SEARCH_ARTIST, GET_GRAPH_DATA,
} from '../graphql/queries';
import HomeView from '../components/templates/home';

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [graphData, setGraphData] = useState(false);

  const graphqlClient = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_API,
  });


  const search = async (query) => {
    const { data } = await graphqlClient.query({
      query: SEARCH_ARTIST(query),
    });

    setSearchResult(data.artistSearch.results);
  };

  const getGraphData = async (id) => {
    const { data } = await graphqlClient.query({
      query: GET_GRAPH_DATA(id),
    });

    console.log(data);

    setGraphData(data.graphConstruct.graph);
  };

  return (
    <HomeView
      search={search}
      getGraphData={getGraphData}
      graphData={graphData}
      searchResult={searchResult}
    />
  );
};
export default Home;
