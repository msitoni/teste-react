import React from "react";

import Repo from "./Repo";

const RepoList = ({ repos }) => (
  <div className="repo-list">
    {repos.map((repo, index) => (
      <Repo
        key={index}
        repo={repo}
      />
    ))}
  </div>
);

export default RepoList;
