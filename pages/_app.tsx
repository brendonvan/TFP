import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';

export default function App({ Component, pageProps }: AppProps) {

  const value = { user: {}, username: 'jeff' };
  return (
  <UserContext.Provider value={ value }>
    <Navbar />  
    <Component {...pageProps} />
    <Toaster />
  </UserContext.Provider>
  )
}
