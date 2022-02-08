import logo from './logo.svg';
import './App.css';
import TitlePage from './components/title/layout/title';
import SubtitlePage from './components/subtitle/subtitle';
import DescriptionPage from './components/description/description';
import Image from './components/image/image';
import Quote from './components/quote/quote';
import Fullvedio from './components/fullvedio/fullvedio';
import Halfvedio from './components/halfvedio/halfvedio';
// import Portage from './Portage/Portage';

function App() {
  return (
    <div className='Styles'>
      <TitlePage/>
      <SubtitlePage/>
      <DescriptionPage/>
      <Image/>
      <Quote/>
      <Fullvedio/>
      <Halfvedio/>
      {/* <Portage/> */}
    </div>
  );
}

export default App;
