import styles from './App.css';
import Header from './component/Header'
import DayList from './component/DayList'
import Day from './component/Day';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmptyPage from './component/EmptyPage';
import Create from './component/Create';
import CreateDay from './component/CreateDay';

function App() {

  return (
    <BrowserRouter>
        <div className={styles.App}>
        <Header />
          <Routes>
                <Route path="/" element={<DayList />}></Route>
                <Route path="/day/:day" element={<Day />}></Route>
                <Route path="/create" element={<Create/>}></Route>
                <Route path='*'element={<EmptyPage />}></Route>
                <Route path="/createday" element={<CreateDay/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;
