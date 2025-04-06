import generateStats from "../lib/generateStats";
import { WeaponStats, StatsType } from './types';
import Radarchart from "./radar_chart";

export default function WeaponCard({ weapon, statsType }: { weapon: string, statsType: StatsType }) {

	const stats: WeaponStats = generateStats(weapon);

	return (
		<div className="card">
			<div style={{ textAlign: 'left' }}>
				<h3>
					{weapon}:
				</h3>

				<p>
					-info
				</p>
				<p>
					-info
				</p>
			</div>
			<Radarchart stats={stats} type={statsType} />
		</div >
	)
}
