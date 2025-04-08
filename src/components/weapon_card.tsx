import generateStats from "../lib/generateStats";
import { WeaponStats, StatsType } from '../lib/types';
import scoredWeapons from '../scoredWeapons.json';
import Radarchart from "./radar_chart";

export default function WeaponCard({ weapon, statsType }: { weapon: string, statsType: StatsType }) {

	const stats = scoredWeapons.filter(item => item.name === weapon)[0];


	return (
		<div className="weaponCard">

			<div style={{ textAlign: 'left' }}>
				<h3>
					{weapon}
				</h3>

			</div>

			<div>
				<h3>
					Light Attacks
				</h3>
				<p>
					Average: {stats.attacks.average.light.damage.toFixed(2)}
				</p>
				<p>
					Slash: {stats.attackZScores.light.slash.toFixed(2)}
				</p>
				<p>
					Overhead: {stats.attackZScores.light.overhead.toFixed(2)}
				</p>
				<p>
					Stab: {stats.attackZScores.light.stab.toFixed(2)}
				</p>
			</div>

			<Radarchart weapon={weapon} type={"Light Attack"} />

			<div>
				<h3>
					Heavy Attacks
				</h3>
				<p>
					Average: {stats.attacks.average.heavy.damage.toFixed(2)}
				</p>
				<p>
					Slash: {stats.attackZScores.heavy.slash.toFixed(2)}
				</p>
				<p>
					Overhead: {stats.attackZScores.heavy.overhead.toFixed(2)}
				</p>
				<p>
					Stab: {stats.attackZScores.heavy.stab.toFixed(2)}
				</p>
			</div>

			<Radarchart weapon={weapon} type={"Heavy Attack"} />
		</div >
	)
}
