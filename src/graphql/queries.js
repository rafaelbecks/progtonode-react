
import { gql } from 'apollo-boost';

const SEARCH_ARTIST = query => gql`
    query {
        artistSearch(query: "${query}", perPage:10,  type:"artist") {
        results { id, title, type}
    }
}
`;

const GET_GRAPH_DATA = id => gql`
    query {
    graphConstruct(artistId:"${id}", level: 2){ 
        artist { 
        id, name 
        }, 
        graph { 
        nodes {
            id,
            label,
            active,
            group
        }, 
        links {
            source, target 
        } 
        } 
    }
    }
`;

export {
  SEARCH_ARTIST, GET_GRAPH_DATA,
};
