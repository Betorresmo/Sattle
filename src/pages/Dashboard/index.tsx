import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FaSatellite, FaSearch, FaCaretRight } from 'react-icons/fa';

import { Logo } from '../../components/Logo';
import { SearchBar, Repositories, Error } from './styles';

import api from '../../services/api';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localStorageRepositories = localStorage.getItem('@Sattle');

    if (localStorageRepositories) {
      return JSON.parse(localStorageRepositories);
    }

    return [];
  });

  const [newRepo, setNewRepo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('@Sattle', JSON.stringify(repositories));
  }, [repositories]);

  const HandleAddNewRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      if (!newRepo) {
        setError('Type a repository.');
        return;
      }

      const { data: newRepository } = await api.get<Repository>(
        `repos/${newRepo}`,
      );

      setRepositories([...repositories, newRepository]);
      setNewRepo('');
      setError('');
    } catch (err) {
      setError('Repository not found.');
    }
  };

  return (
    <>
      <Logo>
        <h1>
          <FaSatellite />
          Satlle
        </h1>
        <h2>Discover GitHub</h2>
      </Logo>

      <SearchBar onSubmit={HandleAddNewRepository} hasError={!!error}>
        {error && <Error>{error}</Error>}
        <input
          value={newRepo}
          onChange={event => setNewRepo(event.target.value)}
          placeholder="Author/repository name"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </SearchBar>

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FaCaretRight />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
