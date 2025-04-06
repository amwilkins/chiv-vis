import { useState } from "react";
import useDebounce from "../lib/useDebounce";
import useClickOutside from "../hooks/useClickOutside";
import ItemList from "./item_list";

export default function Selector({ items, selectedOptions, setSelectedOptions }: { items: string[], selectedOptions: string[], setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>> }) {

	const [query, setQuery] = useState('')
	const [clicked, setClicked] = useState(false)

	// this isn't useDebouncing the setter, only the getter
	const searchQuery = useDebounce(query, 300)

	function handleClick(item: string) {
		// remove item
		if (selectedOptions.includes(item)) {
			let tempArray = [...selectedOptions];
			var index = tempArray.indexOf(item);
			if (index !== -1) {
				tempArray.splice(index, 1);
				setSelectedOptions(tempArray);
			}
		} else {
			// add item
			setSelectedOptions([...selectedOptions, item])
		}
	}

	// click outside to close
	function handleClickOutside() {
		setClicked(false);
	}
	const ref = useClickOutside(handleClickOutside);

	const searchableItems = items.filter((i: string) => {
		if (selectedOptions.includes(i)) {
			return null
		} else {
			return i
		}
	})

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
				<ItemList items={selectedOptions} clicked={null} searchQuery={null} query={null} handleClick={handleClick} />

			</fieldset >
			<div className="itemlist">
				<ItemList items={searchableItems} clicked={clicked} searchQuery={searchQuery} query={query} handleClick={handleClick} />
			</div>
		</div>
	);
}
