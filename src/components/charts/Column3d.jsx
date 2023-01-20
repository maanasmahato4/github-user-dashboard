import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Column3d = ({ data }) => {
    const chartConfigs = {
        type: "Column2d",
        width: "500",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Most Popular",
                xAxisName: 'Stars',
                yAxisName: 'Repos',
                xAxisNameFontSize: '16px',
                yAxisNameFontSize: '16px'
            },
            data: data
        }
    };

    return <ReactFC {...chartConfigs} />;
}

export default Column3d;