import '../styles/globals.css'
import {  ApolloProvider } from '@apollo/client';
import useApollo from '../utils/apollo-client';
import 'bootstrap/dist/css/bootstrap.css'
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import { ScopedCssBaseline } from '@mui/material';


function MyApp({ Component, pageProps }) {
  const {client} = useApollo();
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
      },
    
    },
  });
  return <ThemeProvider theme={theme}>
  <ApolloProvider client={client}>
  <ScopedCssBaseline>
  <Component {...pageProps} />
  </ScopedCssBaseline>
  </ApolloProvider>
  </ThemeProvider>
  
}

export default MyApp
