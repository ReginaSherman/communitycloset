import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import theme from '../styles/theme'
import { Nav } from '../components/Nav';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <ChakraProvider resetCSS theme={theme}>
          <ColorModeProvider
            options={{
              useSystemColorMode: false,
            }}
          >
            <Component {...pageProps} />
          </ColorModeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default MyApp