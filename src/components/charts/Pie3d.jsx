import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3dChart = ({ data }) => {
    const chartConfigs = {
        type: "pie3d",
        width: "95%",
        height: "50%",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Languages",
                theme: "fusion"
            },
            data: data
        }
    };

    return <ReactFC {...chartConfigs} />;
}

export default Pie3dChart;