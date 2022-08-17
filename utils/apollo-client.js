import { ApolloClient, InMemoryCache } from '@apollo/client';


const useApollo =() =>{

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
  });

  return{
    client
  }
}

export default useApollo