import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2d = ({ data }) => {
    const chartConfigs = {
        type: "Doughnut2d",
        width: "95%",
        height: "40%",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Languages",
                theme: "candy"
            },
            data: data
        }
    };

    return <ReactFC {...chartConfigs} />;
}

export default Doughnut2d;