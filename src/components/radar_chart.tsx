import Chart from "react-apexcharts";
import { StatsType, WeaponStats } from "./types";

export default function Radarchart({ weapon, stats, type }: { weapon: string, stats: WeaponStats, type: StatsType }) {

	let labels: Array<string> = ['Slash', 'Overhead', 'Stab'];
	let data: Array<number> = [stats.damage.lSlash, stats.damage.lOverhead, stats.damage.lStab];
	if (type === "heavyAttack") {
		data = [stats.damage.hSlash, stats.damage.hOverhead, stats.damage.hStab];
	}

	const options = {
		chart: {
			type: 'radar',
		},
		labels: labels,
		markers: {
			size: 0
		},
		yaxis: {
			show: false,
			tickAmount: 2,
			min: -3,
			max: 3,
		},
		plotOptions: {
			radar: {
				size: 70,
				polygons: {
					connectorColors: 'transparent',
					strokeWidth: 1
				}
			}
		}
	};
	const series = [
		{
			name: 'Damage',
			data: data,
		}]

	return (
		<div>
			<Chart options={options} type="radar" series={series} width="100%" />
		</div >
	);
}
