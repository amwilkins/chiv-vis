import generateStats from "../lib/generateStats";
import { WeaponStats, StatsType } from './types';
import Radarchart from "./radar_chart";

export default function WeaponCard({ weapon }: { weapon: string }) {

	const stats: WeaponStats = generateStats(weapon);
	const statsType: StatsType = "lightAttack"

	return (
		<div className="card">
			<div style={{ textAlign: 'left' }}>
				<p>
					-info
				</p>
				<p>
					-info
					<p>
					</p>
					-info
				</p>
			</div>
			<Radarchart weapon={weapon} stats={stats} type={statsType} />
		</div >
	)
}
