import { createContext, useState, useEffect } from 'react';
import mockUser from '../assets/mockData/mockUser';
import mockRepos from '../assets/mockData/mockRepos';
import mockFollowers from '../assets/mockData/mockFollowers';
import { fetchUser } from '../components/api/GithubUser';
import axios from 'axios';

export const GithubContext = createContext({});

export const GithubProvider = ({ children }) => {
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: '' });
    const [searchError, setSearchError] = useState({ show: false, msg: '' });
    const [githubUser, setGithubUser] = useState(mockUser);
    const [githubRepos, setGithubRepos] = useState(mockRepos);
    const [githubFollowers, setGithubFollowers] = useState(mockFollowers);

    const fetchRate = async () => {
        await fetchUser('/rate_limit').then(({ data }) => {
            let { rate: { remaining } } = data;
            setRequests(remaining);
            if (remaining === 0) {
                setError({ show: true, msg: "Hourly request rate has been exceeded! The requests count will reset next hour." })
            }
        }).catch(err => console.log(err));
    }

    const fetchSearchUser = async (username) => {
        setLoading(true);
        const res = await fetchUser(`/users/${username}`).catch(err => console.log(err));
        if (res) {
            setGithubUser(res.data);
            const { repos_url, followers_url } = res.data;
            setSearchError({ show: false, msg: '' });
            await Promise.all([
                axios.get(`${repos_url}?per_page=100`), axios.get(`${followers_url}?per_page=100`)
            ]).then(res => {
                const [repos, followers] = res;
                if (repos.status == 200) {
                    setGithubRepos(repos.data);
                }
                if (followers.status == 200) {
                    setGithubFollowers(followers.data);
                }
            })
        }
        else {
            setSearchError({ show: true, msg: "Error! User not found!" });
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchRate();
    }, []);
    return (
        <GithubContext.Provider value={{ githubUser, githubRepos, githubFollowers, requests, loading, error, searchError, fetchSearchUser }}>
            {children}
        </GithubContext.Provider>
    )
}