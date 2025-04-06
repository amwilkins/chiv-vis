import './App.css'
import { useState } from 'react';
import { ALL_WEAPONS, Weapon } from "chivalry2-weapons";


//components
import WeaponInfo from './components/weapon_info';
import { WeaponDamage, WeaponRange, WeaponStats } from './components/types';
import Radarchart from './components/radar_chart';
import Selector from './components/selector';
import WeaponCard from './components/weapon_card';
// import generateStats from './lib/generateStats';


const weaponOptions = ALL_WEAPONS.map(i => i.name)

function App() {

	const [selectedOptions, setSelectedOptions] = useState(["Polehammer"]);
	const [selectedWeapon, setWeapon] = useState<string>("Argon's Sword");

	const weapon: Weapon | undefined = ALL_WEAPONS.find(i => i.name === selectedWeapon);
	if (!weapon) return null;

	// const stats: WeaponStats = generateStats(weapon);


	return (
		<>
			<h1>Chivarly 2 Weapon Analysis</h1>

			{/* <Toolbar items={weaponOptions} weapon={selectedWeapon} setWeapon={setWeapon} /> */}
			<div className='container'>
				<div className='column'>
					<Selector items={weaponOptions} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
				</div>


				<div className='column'>
					{selectedOptions.map((weapon: string, index) => (
						<WeaponCard key={index} weapon={weapon} />
					))}
				</div>

			</div>

			{/* <Radarchart options={options} series={series} /> */}
			{/**/}
			{/* <WeaponInfo stats={stats} /> */}


		</ >
	)
}



export default App


