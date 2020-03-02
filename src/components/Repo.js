import React from "react";

class Repo extends React.Component {

render() {
    const { repo } = this.props;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted"><a href={repo.html_url}>{repo.html_url}</a></h6>
                <p className="card-text">{repo.id}</p>
            </div>
        </div>
    );
  }
}

export default Repo;

