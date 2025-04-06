import { WeaponStats, keyMap } from '../lib/types';

export default function WeaponInfo({ stats }: { stats: WeaponStats }) {
	if (!stats) return null;

	return (
		<div>
			<h4>Damage Zscores</h4>
			<div>
				{Object.keys(stats.damage).map((key, index) => {
					return (
						< div key={index} >
							<p>
								{keyMap[key]}: {stats.damage[key].toFixed(2)}
							</p>
						</div>

					);
				})}
			</div >

			<h4>Range Zscores</h4>
			<div>
				{Object.keys(stats.range).map((key, index) => {
					return (
						< div key={index} >
							<p>
								{keyMap[key]}: {stats.range[key].toFixed(2)}
							</p>
						</div>

					);
				})}
			</div >
		</div >
	)
}
