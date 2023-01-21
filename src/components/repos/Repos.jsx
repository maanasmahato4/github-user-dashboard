import { Group, Space } from '@mantine/core';
import { useContext, useMemo } from 'react';
import { GithubContext } from '../../context/context';
import Bar2d from '../charts/Bar2d';
import Column2d from '../charts/Column2d';
import Doughnut2d from '../charts/Doughnut2d';
import Pie3dChart from '../charts/Pie3d';
import './repos.css';

function Repos() {
    const { githubRepos } = useContext(GithubContext);

    let languages = useMemo(() => githubRepos.reduce((total, item) => {
        const { language, stargazers_count, forks_count } = item;
        if (!language) return total;
        if (!total[language]) {
            total[language] = { label: language, value: 1, stars: stargazers_count, forks: forks_count };
        }
        else {
            total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count, forks: total[language].forks + forks_count }
        }
        return total;
    }, {}), githubRepos);

    //copied, i will change this code with my own in future
    const mostUsed = Object.values(languages).slice(0, 5)

    //copied, i will change this code with my own in future
    const mostPopular = Object.values(languages)
        .map((item) => {
            return { ...item, value: item.stars };
        })
        .slice(0, 5);

    //copied, i will change this code with my own in future
    let { stars, forks } = githubRepos.reduce(
        (total, item) => {
            const { stargazers_count, name, forks } = item;
            total.stars[stargazers_count] = { label: name, value: stargazers_count };
            total.forks[forks] = { label: name, value: forks };
            return total;
        },
        {
            stars: {},
            forks: {},
        }
    );

    stars = Object.values(stars).slice(-5).reverse();
    forks = Object.values(forks).slice(-5).reverse();
    return (
        <Group position="center">
            <Pie3dChart data={mostUsed} />
            <Space h="md" />
            <Doughnut2d data={mostPopular} />
            <Space h="md" />
            <Column2d data={stars} />
            <Space h="md" />
            <Bar2d data={forks} />
        </Group>
    )
}

export default Repos;