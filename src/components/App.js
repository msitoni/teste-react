import React, { Fragment } from 'react';

import './App.css';
import Error from './Error';
import RepoList from './RepoList';
import RepoService from '../services/RepoService';

class App extends React.Component {

  
  state = {
    repos: [],
    isLoading: false,
    reloadHasError: false,

  };

  componentDidCatch() {
    this.setState({ reloadHasError: true });
  }

  componentDidMount() {
    this.handleReload();
  }

  handleReload = () => {
    this.setState({ isLoading: true, reloadHasError: false });
    RepoService.load()
      .then(repos => {
        this.setState({ repos, isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, reloadHasError: true });
      });
  };


  render() {
    const {
      repos,
      isLoading,
      reloadHasError,
    } = this.state;

  return (
        <div className="container">
          {reloadHasError ? (
            <Error onRetry={this.handleReload} />
          ) : (
            <Fragment>
              <RepoList
                repos={repos}
              />
            </Fragment>
          )}
        </div>   
  );
}
}
export default App;
