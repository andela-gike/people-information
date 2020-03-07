import React, { Component } from 'react';
import NavHeader from './components/NavHeader';
import PeopleTable from './components/Table';
import Pagination from './components/Pagination';
import Search from './components/UserLookup';
import { PeopleUrl } from './constants';
import Datalayer from './services/dataLayer';
import './App.scss';

interface AppState {
  peopleData: Array<any>
  currentPage: number,
  pageSize: number,
  filteredPeople: Array<any>
  // pageDisplayItems: Array<any>
}

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      peopleData: [],
      currentPage: 0,
      pageSize: 10,
      filteredPeople: [],
    };
  }

  componentDidMount() {
    this.loadPeopleData();
  }

  loadPeopleData = async () => {
    const result = await Datalayer({ method: 'GET', url: PeopleUrl });
    this.setState({
      peopleData: result.data,
      filteredPeople: result.data,
    });
  }

  handlePrevPageClick = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage > 0 ? prevState.currentPage - 1 : 0,
    }));
  }

  handleNextPageClick = () => {
    this.setState((prevState) => ({
      currentPage:
        prevState.currentPage
        < Math.ceil(prevState.peopleData.length / prevState.pageSize)
          ? prevState.currentPage + 1
          : prevState.currentPage,
    }));
  }

  handleSearchUser = (value?: any) => {
    const { peopleData } = this.state;

    const newList = peopleData.filter((empl: any) => {
      const lc = `${empl.name.first} ${empl.name.last}`.toLowerCase();
      const filter = value.toLowerCase();
      return lc.includes(filter);
    });
    this.setState({
      filteredPeople: newList,
    });
  }

  render() {
    const {
      filteredPeople, currentPage, pageSize,
    } = this.state;
    const pageDisplayItems = filteredPeople.slice(
      currentPage * pageSize, currentPage * pageSize + pageSize,
    );
    const totalPeople = filteredPeople.length;
    return (
      <div className="App">
        <NavHeader navClass="top-header" />
        <section className="body-section">
          <h1 className="people-header">People</h1>
          <Search
            searchClass="employee-search"
            handleSearchChange={this.handleSearchUser}
          />
          <PeopleTable
            tableClass="people-info-view"
            peopleInfo={pageDisplayItems}
          />
          <Pagination
            pageClass="people-list-count"
            goToNextPage={this.handleNextPageClick}
            goToPreviousPage={this.handlePrevPageClick}
            totalRecords={totalPeople}
            pageSize={pageSize}
            leastPageCount={1}
          />
        </section>
      </div>
    );
  }
}

export default App;
