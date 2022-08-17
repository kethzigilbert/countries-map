import '../styles/globals.css'
import {  ApolloProvider } from '@apollo/client';
import useApollo from '../utils/apollo-client';
import 'bootstrap/dist/css/bootstrap.css'
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';




function MyApp({ Component, pageProps }) {
  const {client} = useApollo();
  const theme = createTheme({
    palette: {
      background: {
        default: "#3a7ca5",
        paper:"#16425B"
      },
      primary: {
        main: '#3a7ca5',
      },
    },
  });
  return <ThemeProvider theme={theme}>
  <ApolloProvider client={client}>
  <Box>
  <Component {...pageProps} />
  </Box>
  </ApolloProvider>
  </ThemeProvider>
  
}

export default MyApp
