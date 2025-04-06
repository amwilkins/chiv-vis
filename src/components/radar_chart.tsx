import Chart from "react-apexcharts";

export default function Radarchart({ weapon, stats }) {
	console.log(stats)


	const options = {
		chart: {
			type: 'radar',
		},
		labels: ['HSlash', 'HOverhead', 'HStab'],
		yaxis: {
			min: -3,
			max: 3,
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			}
		},
		title: {
			text: weapon
		},
		plotOptions: {
			radar: {
				polygons: {
					strokeColors: 'transparent',
					connectorColors: 'transparent',
					strokeWidth: 1
				}
			}
		}
	};
	const series = [
		{
			name: 'Damage',
			data: [stats.damage.hSlash, stats.damage.hOverhead, stats.damage.hStab],
		}]

	return (
		<div>
			<Chart options={options} type="radar" series={series} width="100%" />
		</div >
	);
}
