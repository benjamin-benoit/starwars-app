import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import PeopleList from './pages/PeopleList/PeopleList';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home/Home';
import styled from 'styled-components';

const Container = styled.div`
  overflow: auto;
  background-color: #fff;
  color: #000;
  width: 90%;
  margin: auto;
  padding: 10px;
  text-align: center;
`;

const AppLayout = () => (
  <Container>
    <Outlet />
  </Container>
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/peoplelist" element={<PeopleList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
