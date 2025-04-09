import scoredWeapons from '../scoredWeapons.json';
import Radarchart from "./radar_chart";

export default function WeaponCard({ weapon, activeTab }: { weapon: string, activeTab: string }) {

	const stats = scoredWeapons.filter(item => item.name === weapon)[0];


	function setData(activeTab: string) {
		if (activeTab === "Damage") {
			return ({
				average1: stats.attacks.average.light.damage.toFixed(2),
				slash1: stats.attackZScores.light.slash.toFixed(2),
				overhead1: stats.attackZScores.light.overhead.toFixed(2),
				stab1: stats.attackZScores.light.stab.toFixed(2),

				average2: stats.attacks.average.heavy.damage.toFixed(2),
				slash2: stats.attackZScores.heavy.slash.toFixed(2),
				overhead2: stats.attackZScores.heavy.overhead.toFixed(2),
				stab2: stats.attackZScores.heavy.stab.toFixed(2),
			}
			)
		}
		else {
			return ({
				average1: stats.attacks.average.range.toFixed(2),
				slash1: stats.rangeZScores.range.slash.toFixed(2),
				overhead1: stats.rangeZScores.range.overhead.toFixed(2),
				stab1: stats.rangeZScores.range.stab.toFixed(2),

				average2: stats.attacks.average.altRange.toFixed(2),
				slash2: stats.rangeZScores.altRange.slash.toFixed(2),
				overhead2: stats.rangeZScores.altRange.overhead.toFixed(2),
				stab2: stats.rangeZScores.altRange.stab.toFixed(2),
			}
			)
		}
	}

	let titles: string[] = []
	if (activeTab === "Damage") {
		titles = ["Light Attacks", "Heavy Attacks"]
	}
	else {
		titles = ["Range", "Alt Range"]
	}

	const data = setData(activeTab)

	return (
		<div className="weaponCard">

			<div style={{ textAlign: 'left' }}>
				<h3>
					{weapon}
				</h3>

			</div>

			<div>
				<h3>
					{titles[0]}
				</h3>
				<p>
					Average: {data.average1}
				</p>
				<p>
					Slash: {data.slash1}
				</p>
				<p>
					Overhead: {data.overhead1}
				</p>
				<p>
					Stab: {data.stab1}
				</p>
			</div>

			<Radarchart weapon={weapon} type={"Light Attack"} />

			<div>
				<h3>
					{titles[1]}
				</h3>
				<p>
					Average: {data.average2}
				</p>
				<p>
					Slash: {data.slash2}
				</p>
				<p>
					Overhead: {data.overhead2}
				</p>
				<p>
					Stab: {data.stab2}
				</p>
			</div>

			<Radarchart weapon={weapon} type={"Heavy Attack"} />
		</div >
	)
}
