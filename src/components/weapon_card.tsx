import generateStats from "../lib/generateStats";
import { WeaponStats, StatsType } from '../lib/types';
import Radarchart from "./radar_chart";

export default function WeaponCard({ weapon, statsType }: { weapon: string, statsType: StatsType }) {

	const stats: WeaponStats = generateStats(weapon);


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
					Slash: {stats.damage.lAvg.toFixed(2)}
				</p>
				<p>
					Slash: {stats.damage.lSlash.toFixed(2)}
				</p>
				<p>
					Overhead: {stats.damage.lOverhead.toFixed(2)}
				</p>
				<p>
					Stab: {stats.damage.lStab.toFixed(2)}
				</p>
			</div>

			<Radarchart stats={stats} type={statsType} />

			<div>
				<h3>
					Heavy Attacks
				</h3>
				<p>
					Average: {stats.damage.hAvg.toFixed(2)}
				</p>
				<p>
					Slash: {stats.damage.hSlash.toFixed(2)}
				</p>
				<p>
					Overhead: {stats.damage.hOverhead.toFixed(2)}
				</p>
				<p>
					Stab: {stats.damage.hStab.toFixed(2)}
				</p>
			</div>

			<Radarchart stats={stats} type={statsType} />
		</div >
	)
}
