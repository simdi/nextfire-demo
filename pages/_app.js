import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { UserContext } from '../lib/context';

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, username: 'Chisimdi'}}>
      <Navbar />
      <div className="content-wrapper">
        <Component {...pageProps} />
      </div>
    </UserContext.Provider>
  )
}

export default MyApp;
