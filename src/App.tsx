import { ALL_WEAPONS } from "chivalry2-weapons";
import { useState } from 'react';
import './App.css';
import Selector from './components/selector';
import { StatsType } from './components/types';
import WeaponCard from './components/weapon_card';

const weaponOptions = ALL_WEAPONS.map(i => i.name)

function App() {
	const [selectedOptions, setSelectedOptions] = useState(["Polehammer"]);

	// const [selectedWeapon, setWeapon] = useState<string>("Argon's Sword");
	// const weapon: Weapon | undefined = ALL_WEAPONS.find(i => i.name === selectedWeapon);
	// if (!weapon) return null;

	const statsType: StatsType = "Light Attack"

	return (
		<>
			<h1>Chivarly 2 Weapon Analysis</h1>

			<div className='container'>
				<div className='column'>
					<Selector items={weaponOptions} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
				</div>

				<div className='column'>
					{selectedOptions.map((weapon: string, index) => (
						<WeaponCard key={index} weapon={weapon} type={statsType} />
					))}
				</div>
			</div>
		</ >
	)
}

export default App


