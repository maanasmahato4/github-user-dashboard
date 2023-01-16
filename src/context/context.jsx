import { createContext, useState } from 'react';
import mockUser from '../assets/mockData/mockUser';
import mockRepos from '../assets/mockData/mockRepos';
import mockFollowers from '../assets/mockData/mockFollowers';

export const GithubContext = createContext({});

export const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [githubRepos, setGithubRepos] = useState(mockRepos);
    const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
    return (
        <GithubContext.Provider value={{ githubUser, githubRepos, githubFollowers }}>
            {children}
        </GithubContext.Provider>
    )
}