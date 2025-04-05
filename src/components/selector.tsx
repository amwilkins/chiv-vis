import { useState } from "react";
import useDebounce from "../lib/useDebounce";
import ItemList from "./item_list";


export default function Selector({ items, selectedOptions, setSelectedOptions }: { items: array }) {

	const [query, setQuery] = useState('')
	const [clicked, setClicked] = useState(false)

	const searchQuery = useDebounce(query, 500)

	function handleClick(item: string) {
		setSelectedOptions([...selectedOptions, item])
		setClicked(false)
	}


	return (
		<fieldset id="weapons" className="">
			<legend>Weapons</legend>

			<div className="Searchbar">
				<input
					placeholder="Search Weapons"
					onClick={() => setClicked(true)}
					onChange={event => setQuery(event.target.value)}
				/>
			</div>

			<ItemList items={items} clicked={clicked} searchQuery={searchQuery} query={query} handleClick={handleClick} />

		</fieldset >

	);
}
