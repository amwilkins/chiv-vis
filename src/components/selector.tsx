import { useState } from "react";
import useDebounce from "../lib/useDebounce";
import useClickOutside from "../hooks/useClickOutside";
import ItemList from "./item_list";

export default function Selector({ items, selectedOptions, setSelectedOptions }: { items: array }) {

	const [query, setQuery] = useState('')
	const [clicked, setClicked] = useState(false)

	const searchQuery = useDebounce(query, 300)

	function handleClick(item: string) {
		setSelectedOptions([...selectedOptions, item])
	}

	function handleClickOutside() {
		setClicked(false);
	}
	const ref = useClickOutside(handleClickOutside);

	return (
		<div ref={ref} id="weapons">
			<fieldset >
				<legend>Weapons</legend>

				<div className="Searchbar">
					<input
						placeholder="Search Weapons"
						onClick={() => setClicked(true)}
						onChange={event => setQuery(event.target.value)}
					/>
				</div>


			</fieldset >
			<ItemList className="itemlist" items={items} clicked={clicked} searchQuery={searchQuery} query={query} handleClick={handleClick} />
		</div>
	);
}
