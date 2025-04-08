import { ALL_WEAPONS } from "chivalry2-weapons";
import { StatsType } from "../lib/types";
import Selector from "./selector";
import WeaponCard from "./weapon_card";

export default function CardPage({ selectedOptions, setSelectedOptions }: { selectedOptions: string[], setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>> }) {
	const weaponOptions = ALL_WEAPONS.map(i => i.name)
	const statsType: StatsType = "Light Attack"

	return (
		<div className='container'>

			<div className='column'>
				<Selector items={weaponOptions} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
			</div>

			<div className='column'>
				{selectedOptions.map((weapon: string, index: number) => (
					<WeaponCard key={index} weapon={weapon} statsType={statsType} />
				))}
			</div>

		</div>
	);
}
