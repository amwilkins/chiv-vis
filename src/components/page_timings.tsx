import { ALL_WEAPONS } from "chivalry2-weapons";
import Selector from "./selector";
import WeaponCard from "./weapon_card";

export default function TimingsPage({ selectedOptions, setSelectedOptions, activeTab }: { selectedOptions: string[], setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>, activeTab: string }) {
	const weaponOptions = ALL_WEAPONS.map(i => i.name)

	return (
		<div className='container'>

			<div className='column'>
				<Selector items={weaponOptions} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
			</div>

			<div className='column'>
				{selectedOptions.map((weapon: string, index: number) => (
					<WeaponCard key={index} weapon={weapon} activeTab={activeTab} />
				))}
			</div>

		</div>
	);
}
