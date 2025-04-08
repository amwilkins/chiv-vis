import Chart from "react-apexcharts";
import { StatsType } from "../lib/types";
import stats from '../scoredWeapons.json';

export default function Radarchart({ weapon, type }: { weapon: string, type: StatsType }) {

	const filteredItems = stats.filter(item => item.name === weapon)[0];


	console.log(filteredItems.attackZScores.heavy)

	function getRadarData(type: StatsType) {
		if (type === "Heavy Attack") {
			return (
				{
					labels: Object.keys(filteredItems.attackZScores.heavy),
					data: Object.values(filteredItems.attackZScores.heavy)
				})
		}
		else if (type === "Light Attack") {
			return (
				{
					labels: Object.keys(filteredItems.attackZScores.light),
					data: Object.values(filteredItems.attackZScores.light)
				})
		}
	}


	const series = [
		{
			name: "Data",
			data: getRadarData(type)?.data
		}
	]
	const options = {
		chart: {
			type: 'radar',
		},
		labels: getRadarData(type)?.labels,
		markers: {
			size: 0
		},
		yaxis: {
			show: false,
			tickAmount: 2,
			min: -2,
			max: 2,
		},
		plotOptions: {
			radar: {
				// offsetY: 10,
				size: 60,
				polygons: {
					connectorColors: 'transparent',
					strokeWidth: 1
				}
			}
		}
	};

	return (
		<div>
			<Chart options={options} type="radar" series={series} width="100%" height="100%" />
		</div >
	);
}
