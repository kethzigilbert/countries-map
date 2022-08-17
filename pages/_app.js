import '../styles/globals.css'
import {  ApolloProvider } from '@apollo/client';
import useApollo from '../utils/apollo-client';
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  const {client} = useApollo();
  
  return <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp
