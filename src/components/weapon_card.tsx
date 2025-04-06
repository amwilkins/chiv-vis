import generateStats from "../lib/generateStats";
import { WeaponStats } from './components/types';
import Radarchart from "./radar_chart";

export default function WeaponCard({ weapon }) {

	const stats: WeaponStats = generateStats(weapon);

	return (
		<div className="card">
			<Radarchart weapon={weapon} stats={stats} />
		</div>
	)
}
