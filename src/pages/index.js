
import '../App.css'
import Header from '../components/Header';
import Body from '../components/Body'
import Footer from '../components/Footer';

function Home() {
  return (
    <container className='body'>
        <Header />
        <Body/>
        <Footer />
    </container>
  );
}

export default Home;