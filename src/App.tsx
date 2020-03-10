import React, { Component } from 'react';
import NavHeader from './components/NavHeader';
import PeopleTable from './components/Table';
import Pagination from './components/Pagination';
import Search from './components/UserLookup';
import Filter from './components/Filter';
import { PeopleUrl } from './constants';
import Datalayer from './services/dataLayer';
import LoadingAnimation from './images/loadingAnime.svg';
import './App.scss';

interface AppState {
  peopleData: Array<any>
  currentPage: number,
  pageSize: number,
  filteredPeople: Array<any>,
  errorMessage: string
}

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      peopleData: [],
      currentPage: 1,
      pageSize: 10,
      filteredPeople: [],
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.loadPeopleData();
  }

  /**
   * Function makes an async endpoint call to get all
   * employees data from the employee endpoint
   */
  loadPeopleData = async () => {
    const result = await Datalayer({ method: 'GET', url: PeopleUrl });
    if (result.message === 'Network Error') {
      this.setState({
        peopleData: [],
        filteredPeople: [],
        errorMessage: result.message,
      });
    } else {
      this.setState({
        peopleData: result.data,
        filteredPeople: result.data,
      });
    }
  }

  /**
   * The function the move the current page in display back to the previous
   * page
   */
  handlePrevPageClick = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage > 0 ? prevState.currentPage - 1 : 0,
    }));
  }

  /**
   * The function the move the current page in display
   * to the next page
   */
  handleNextPageClick = () => {
    this.setState((prevState) => ({
      currentPage:
        prevState.currentPage
        < Math.ceil(prevState.peopleData.length / prevState.pageSize)
          ? prevState.currentPage + 1
          : prevState.currentPage,
    }));
  }

  /**
   * The function handle the search functionality
   *  that look up an employee based in the employee's name
   */
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

  /**
   * The function handle the filter functionality
   *  that filters and return employees that belong to a certain category
   */
  handleFilterByCategory = (value: string, cate: string) => {
    const { peopleData } = this.state;

    const filterList = peopleData.filter((emplo: any) => {
      const lowerC = cate === 'location' ? emplo.location.country.toLowerCase()
        : emplo[cate].toLowerCase();
      const filterValue = value.toLowerCase();
      return lowerC === filterValue;
    });

    this.setState({
      filteredPeople: filterList,
    });
  }

  goToClickedPage = (pageIndex: number) => {
    this.setState({
      currentPage: pageIndex,
    });
  }

  render() {
    const {
      filteredPeople, currentPage, pageSize, peopleData, errorMessage,
    } = this.state;
    const indexOfLastEmpl = currentPage * pageSize;
    const indexOfFirstEmpl = indexOfLastEmpl - pageSize;
    const pageDisplayItems = filteredPeople.slice(indexOfFirstEmpl, indexOfLastEmpl);
    const totalPeople = filteredPeople.length;
    return (
      <div className="App">
        <NavHeader navClass="top-header" />
        {peopleData.length === 0 || errorMessage.length > 0
          ? (
            <div className="loading-state">
              <h1>
                The employee information is not yet loaded,
                if the process persist kindly check your internet connectivity
              </h1>
              <img alt="intial-load" src={LoadingAnimation} />
            </div>
          )
          : (
            <section className="body-section">
              <h1 className="people-header">People</h1>
              <div className="lookup-employee">
                <Search
                  searchClass="employee-search"
                  handleSearchChange={this.handleSearchUser}
                />
                <Filter
                  filterClass="filter-by-category"
                  employeeData={peopleData}
                  handleFilterByCategory={this.handleFilterByCategory}
                />
              </div>
              <PeopleTable
                tableClass="people-info-view"
                peopleInfo={pageDisplayItems}
                refreshPeopleData={this.loadPeopleData}
              />
              <Pagination
                pageClass="people-list-count"
                goToNextPage={this.handleNextPageClick}
                goToPreviousPage={this.handlePrevPageClick}
                totalRecords={totalPeople}
                pageSize={pageSize}
                leastPageCount={1}
                goToClickedPage={this.goToClickedPage}
              />
            </section>
          )}
      </div>
    );
  }
}

export default App;
