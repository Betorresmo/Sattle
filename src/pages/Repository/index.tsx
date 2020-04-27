import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FaSatellite, FaCaretRight } from 'react-icons/fa';
import { keyframes } from 'styled-components';
import { Logo } from '../../components/Logo';
import { RepositoryDetail, Issues } from './styles';

import api from '../../services/api';

interface RepositoryParams {
  repositoryName: string;
}

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  id: string;
  title: string;
  user: {
    login: string;
  };
  html_url: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get<Repository>(`/repos/${params.repositoryName}`).then(response => {
      setRepository(response.data);
    });
    api
      .get<Issue[]>(`/repos/${params.repositoryName}/issues`)
      .then(response => {
        setIssues(response.data);
      });
  }, [params.repositoryName]);

  return (
    <>
      <Link to="/">
        <Logo>
          <h1>
            <FaSatellite />
            Satlle
          </h1>
          <h2>Discover GitHub</h2>
        </Logo>
      </Link>

      {repository && (
        <RepositoryDetail>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Open Issues</span>
            </li>
          </ul>
        </RepositoryDetail>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FaCaretRight />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
