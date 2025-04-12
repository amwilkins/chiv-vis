//import scoredWeapons from '../scoredWeapons.json';
import { MeleeAttack } from "chivalry2-weapons";
import Chart from "react-apexcharts";
import { TimingType } from "../lib/types";

export default function TimingData({ attack, timingType }: { attack: MeleeAttack, timingType: TimingType }) {

	function getTimingData(attack: MeleeAttack, timingType: TimingType) {
		let seriesData: any;

		if (timingType == "Attack") {
			seriesData = {
				holding: attack.holding,
				windup: attack.windup,
				release: attack.release,
				recovery: attack.recovery
			}
		}
		else if (timingType == "Combo") {
			seriesData = {
				holding: attack.holding,
				windup: attack.windup,
				release: attack.release,
				holding2: attack.holding,
				combo: attack.combo,
			}
		}
		else if (timingType == "Ripost") {
			seriesData = {
				holding: attack.holding,
				riposte: attack.riposte,
				release: attack.release,
				holding2: attack.holding,
				combo: attack.combo,
			}
		}
		else if (timingType == "Thwack") {
			seriesData = {
				holding: attack.holding,
				riposte: attack.riposte,
				release: attack.release / 2, //hitting at the midpoint of the attack
				thwack: attack.thwack,
				holding2: attack.holding,
				combo: attack.combo,
			}
		}
		else if (timingType == "Fast Thwack") {
			seriesData = {
				holding: attack.holding,
				riposte: attack.riposte,
				release: attack.release / 5, //hitting at first 20% of the attack
				thwack: attack.thwack,
				holding2: attack.holding,
				combo: attack.combo,
			}
		}
		return (
			{
				labels: Object.keys(seriesData),
				data: Object.values(seriesData)
			})

	}

	const series = [
		{
			name: timingType,
			data: getTimingData(attack, timingType)?.data
		},
		{
			name: "Combo",
			data: getTimingData(attack, "Combo")?.data
		}
	]
	const options = {
		chart: {
			type: "bar",
			stacked: true
		},
		labels: getTimingData(attack, timingType)?.labels,
		plotOptions: {
			bar: {
				rangeBarGroupRows: false,
				horizontal: true,
				dataLabels: {
					total: {
						enabled: false,
						offsetX: 0
					}
				}
			}
		}
	};

	return (
		<div>
			<Chart options={options} type="bar" series={series} />
		</div >
	);
}


