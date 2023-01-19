import { useContext } from 'react';
import { GithubContext } from '../../context/context';
import Doughnut2d from '../charts/Doughnut2d';
import Pie3dChart from '../charts/Pie3d';

function Repos() {
    const { githubRepos } = useContext(GithubContext);

    let languages = githubRepos.reduce((total, item) => {
        const { language } = item;
        if (!language) return total;
        if (!total[language]) {
            total[language] = { label: language, value: 1 };
        }
        else {
            total[language] = { ...total[language], value: total[language].value + 1 }
        }
        return total;
    }, {})
    const chartData = [
        {
            label: "JavaScript",
            value: `15`
        },
        {
            label: "CSS",
            value: `20`
        },
        {
            label: "HTML",
            value: `30`
        },

    ];
    return (
        <div>
            <Pie3dChart data={chartData} />
            <Doughnut2d data={chartData} />
        </div>
    )
}

export default Repos