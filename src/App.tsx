import React, { Component } from 'react';
import NavHeader from './components/NavHeader';
import PeopleTable from './components/Table';
import Pagination from './components/Pagination';
import { PeopleUrl } from './constants';
import Datalayer from './services/dataLayer';
import './App.scss';

interface AppState {
  peopleData: Array<any>
  currentPage: number,
  pageSize: number,
  // pageDisplayItems: Array<any>
}

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      peopleData: [],
      currentPage: 0,
      pageSize: 10,
    };
  }

  componentDidMount() {
    this.loadPeopleData();
  }

  loadPeopleData = async () => {
    const result = await Datalayer({ method: 'GET', url: PeopleUrl });
    this.setState({
      peopleData: result.data,
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

  render() {
    const {
      peopleData, currentPage, pageSize,
    } = this.state;
    const pageDisplayItems = peopleData.slice(
      currentPage * pageSize, currentPage * pageSize + pageSize,
    );
    return (
      <div className="App">
        <NavHeader navClass="top-header" />
        <section className="body-section">
          <h1 className="people-header">People</h1>
          <PeopleTable tableClass="people-info-view" peopleInfo={pageDisplayItems} />
          <Pagination
            pageClass="people-list-count"
            goToNextPage={this.handleNextPageClick}
            goToPreviousPage={this.handlePrevPageClick}
          />
        </section>
      </div>
    );
  }
}

export default App;
