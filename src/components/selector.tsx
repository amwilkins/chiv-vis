import { useState } from "react";
import useDebounce from "../lib/useDebounce";

export default function Selector({ items, selectedOptions, setSelectedOptions }: { items: array }) {

	// this doesn't need to be state
	// make this a variable
	const [query, setQuery] = useState('')

	const searchQuery = useDebounce(query, 500)

	function handleClick(item: string) {
		// instead of altering selectedOptions directly
		// use [...thing] to spread it into a new array
		// then add the new thing
		// never alter state directly
		setSelectedOptions([...selectedOptions, item])
		console.log(selectedOptions)
	}

	return (
		<fieldset id="weapons" className="border rounded p-2">
			<legend>Weapons</legend>

			<div className="Searchbar">
				<input
					placeholder="Search Weapons"
					onChange={event => setQuery(event.target.value)}
				/>
			</div>

			{items
				.filter((weapon: any) => {
					if (searchQuery === '') {
						return null;
					} else if (weapon.toLowerCase().includes(query.toLowerCase())) {
						return weapon
					}
				})
				.map((weapon: string, index) => (
					<div key={index}>
						<button onClick={() => handleClick(weapon)}>
							{weapon}
						</button>
					</div>
				)
				)
			}

		</fieldset >

	);
}
