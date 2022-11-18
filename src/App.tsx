import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PeopleList from './pages/PeopleList/PeopleList';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peoplelist" element={<PeopleList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
