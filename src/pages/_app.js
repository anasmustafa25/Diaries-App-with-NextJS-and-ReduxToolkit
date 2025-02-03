// pages/_app.js
import '@/styles/globals.css';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
