import React from 'react';
import NavHeader from './components/NavHeader';
import PeopleTable from './components/Table';
import Pagination from './components/Pagination';
import './App.scss';

const App: React.FC = () => (
  <div className="App">
    <NavHeader navClass="top-header" />
    <section className="body-section">
      <h1 className="people-header">People</h1>
      <PeopleTable tableClass="people-info-view" />
      <Pagination pageClass="people-list-count" />
    </section>
  </div>
);

export default App;
