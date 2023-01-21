import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar2d = ({ data }) => {
    const chartConfigs = {
        type: "Bar2d",
        width: "95%",
        height: "20%",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Most Forked",
                xAxisName: 'Forks',
                yAxisName: 'Repos',
                xAxisNameFontSize: '16px',
                yAxisNameFontSize: '16px'
            },
            data: data
        }
    };

    return <ReactFC {...chartConfigs} />;
}

export default Bar2d;