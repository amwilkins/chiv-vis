import { ALL_WEAPONS, POLEHAMMER } from "chivalry2-weapons";
import Selector from "./selector";
import WeaponCard from "./weapon_card";
import TimingData from "./timings_table";
import { MeleeAttack } from "chivalry2-weapons";

export default function TimingsPage({ selectedOptions, setSelectedOptions, activeTab }: { selectedOptions: string[], setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>, activeTab: string }) {
	const weaponOptions = ALL_WEAPONS.map(i => i.name)

	return (
		<div className='container'>

			<div className='column'>
				<Selector items={weaponOptions} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
			</div>

			<div className='column'>
				<TimingData selectedOptions={selectedOptions} timingType={"Attack"} />
			</div>

		</div>
	);
}
