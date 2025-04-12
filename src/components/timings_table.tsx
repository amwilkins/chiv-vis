//import scoredWeapons from '../scoredWeapons.json';
import { ALL_WEAPONS, MeleeAttack, Weapon } from "chivalry2-weapons";
import Chart from "react-apexcharts";
import { TimingType } from "../lib/types";

export default function TimingData({ selectedOptions }: { selectedOptions: string[], timingType: TimingType }) {

	type AttackName = 'slash' | 'overhead' | 'stab';
	type AttackStyle = 'light' | 'heavy';

	type TimingInfo = {
		holding: number;
		windup: number;
		release: number;
		recovery: number;
		combo: number;
		thwack: number;
		riposte: number;
	};

	type WeaponTimingRecord = {
		weapon: string;
		attackType: AttackName;
		attackStyle: AttackStyle;
		timings: TimingInfo;
	};

	function extractTimingInfo(attack: MeleeAttack): TimingInfo {
		const {
			holding,
			windup,
			release,
			recovery,
			combo,
			thwack,
			riposte,
		} = attack;

		return {
			holding,
			windup,
			release,
			recovery,
			combo,
			thwack,
			riposte,
		};
	}

	function getTimingInfoForWeapons(
		weaponNames: string[],
		allWeapons: Weapon[]
	): WeaponTimingRecord[] {
		const attackTypes: AttackName[] = ['slash', 'overhead', 'stab'];
		const styles: AttackStyle[] = ['light', 'heavy'];

		const results: WeaponTimingRecord[] = [];

		for (const name of weaponNames) {
			const weapon = allWeapons.find(w => w.name === name);
			if (!weapon) {
				console.warn(`Weapon not found: ${name}`);
				continue;
			}

			for (const type of attackTypes) {
				const attack = weapon.attacks[type];
				for (const style of styles) {
					const meleeAttack = attack[style];
					results.push({
						weapon: weapon.name,
						attackType: type,
						attackStyle: style,
						timings: extractTimingInfo(meleeAttack),
					});
				}
			}
		}

		return results;
	}
	const timingStats = getTimingInfoForWeapons(selectedOptions, ALL_WEAPONS);
	console.log(timingStats)

	// const series = [
	// 	{
	// 		name: "Holding",
	// 		data: [{
	// 			x: "Polehammer",
	// 			y: getTimingData(attack, timingType).holding
	// 		}]
	// 	},
	// 	{
	// 		name: "Windup",
	// 		data: [{
	// 			x: "Polehammer",
	// 			y: getTimingData(attack, timingType)?.windup
	// 		}]
	// 	},
	// 	{
	// 		name: "Release",
	// 		data: [{
	// 			x: "Release",
	// 			y: getTimingData(attack, timingType)?.release
	// 		}]
	// 	},
	// ]
	// const options = {
	// 	chart: {
	// 		type: "bar",
	// 		stacked: true
	// 	},
	// 	//labels: getTimingData(attack, timingType)?.labels,
	// 	plotOptions: {
	// 		bar: {
	// 			rangeBarGroupRows: false,
	// 			horizontal: true,
	// 			dataLabels: {
	// 				total: {
	// 					enabled: false,
	// 					offsetX: 0
	// 				}
	// 			}
	// 		}
	// 	}
	// };


	//<Chart options={options} type="bar" series={series} />

	return (
		<div>
			test
		</div >
	);
}


