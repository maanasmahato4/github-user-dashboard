import { useContext } from 'react';
import { GithubContext } from '../../context/context';
import Bar3d from '../charts/Bar3d';
import Column3d from '../charts/Column3d';
import Doughnut2d from '../charts/Doughnut2d';
import Pie3dChart from '../charts/Pie3d';

function Repos() {
    const { githubRepos } = useContext(GithubContext);

    let languages = githubRepos.reduce((total, item) => {
        const { language, stargazers_count, forks_count } = item;
        if (!language) return total;
        if (!total[language]) {
            total[language] = { label: language, value: 1, stars: stargazers_count, forks: forks_count };
        }
        else {
            total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count, forks: total[language].forks + forks_count }
        }
        return total;
    }, {})

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
        <div>
            <Pie3dChart data={mostUsed} />
            <Doughnut2d data={mostPopular} />
            <Column3d data={stars} />
            <Bar3d data={forks} />
        </div>
    )
}

export default Repos;