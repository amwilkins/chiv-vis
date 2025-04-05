import './App.css'
import { useState } from 'react';
import { ALL_WEAPONS, Weapon } from "chivalry2-weapons";

//math
import { std } from "mathjs";
import { zscore } from "jstat";

//components
import WeaponInfo from './components/weapon_info';
import Toolbar from "./components/toolbar";
import { WeaponDamage, WeaponRange, WeaponStats } from './components/types';
import Radarchart from './components/radar_chart';
import Selector from './components/selector';


const weaponOptions = ALL_WEAPONS.map(i => i.name)

function App() {

	const [selectedWeapon, setWeapon] = useState<string>("Argon's Sword");
	const [selectedOptions, setSelectedOptions] = useState(["Polehammer"]);
	const weapon: Weapon | undefined = ALL_WEAPONS.find(i => i.name === selectedWeapon);
	if (!weapon) return null;

	const stats: WeaponStats = generateStats(weapon);

	const options = {
		chart: {
			type: 'radar',
		},
		labels: ['HSlash', 'HOverhead', 'HStab'],
		yaxis: {
			min: -3,
			max: 3,
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			}
		},
	};
	const series = [
		{
			name: 'Damage',
			data: [stats.damage.hSlash, stats.damage.hOverhead, stats.damage.hStab],
		}]

	return (
		<>
			<h1>Chivarly 2 Weapon Analysis</h1>

			{/* <Toolbar items={weaponOptions} weapon={selectedWeapon} setWeapon={setWeapon} /> */}
			<Selector items={weaponOptions} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

			<p key={weapon.damageType}>Damage Type: {weapon.damageType}</p>

			<Radarchart options={options} series={series} />

			<WeaponInfo stats={stats} />


		</>
	)
}

function generateStats(weapon: Weapon): WeaponStats {

	let RangeSD = std([weapon.attacks.slash.range, weapon.attacks.stab.range, weapon.attacks.overhead.range]);
	let altRangeSD = std([weapon.attacks.slash.altRange, weapon.attacks.stab.altRange, weapon.attacks.overhead.altRange]);

	let heavyDamageSD = std([weapon.attacks.slash.heavy.damage, weapon.attacks.stab.heavy.damage, weapon.attacks.overhead.heavy.damage]);
	let lightDamageSD = std([weapon.attacks.slash.light.damage, weapon.attacks.stab.light.damage, weapon.attacks.overhead.light.damage]);

	const damage: WeaponDamage = {
		hAvg: weapon.attacks.average.heavy.damage,
		hSlash: zscore(weapon.attacks.slash.heavy.damage, weapon.attacks.average.heavy.damage, heavyDamageSD),
		hOverhead: zscore(weapon.attacks.overhead.heavy.damage, weapon.attacks.average.heavy.damage, heavyDamageSD),
		hStab: zscore(weapon.attacks.stab.heavy.damage, weapon.attacks.average.heavy.damage, heavyDamageSD),

		lAvg: weapon.attacks.average.light.damage,
		lSlash: zscore(weapon.attacks.slash.light.damage, weapon.attacks.average.light.damage, lightDamageSD),
		lOverhead: zscore(weapon.attacks.overhead.light.damage, weapon.attacks.average.light.damage, lightDamageSD),
		lStab: zscore(weapon.attacks.stab.light.damage, weapon.attacks.average.light.damage, lightDamageSD),
	}

	const range: WeaponRange = {
		avg: weapon.attacks.average.range,
		slash: zscore(weapon.attacks.slash.range, weapon.attacks.average.range, RangeSD),
		overhead: zscore(weapon.attacks.overhead.range, weapon.attacks.average.range, RangeSD),
		stab: zscore(weapon.attacks.stab.range, weapon.attacks.average.range, RangeSD),

		altAvg: weapon.attacks.average.altRange,
		altSlash: zscore(weapon.attacks.slash.altRange, weapon.attacks.average.altRange, altRangeSD),
		altOverhead: zscore(weapon.attacks.overhead.altRange, weapon.attacks.average.altRange, altRangeSD),
		altStab: zscore(weapon.attacks.stab.altRange, weapon.attacks.average.altRange, altRangeSD),
	}
	return {
		damage: damage,
		range: range
	}
}

export default App


