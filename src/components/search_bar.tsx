import { useState } from "react";
import useDebounce from "../lib/useDebounce";
import Select from "react-select/base";

export default function Searchbar({ items }) {

	// const searchQuery = useDebounce(search, 500)
	const [selectedOptions, setSelectedOptions] = useState();


	function handleSelect(data) {
		setSelectedOptions(data);
	}

	return (
		<div className="Searchbar">
			<Select
				options={items}
				placeholder="Search"
				value={selectedOptions}
				onChange={handleSelect()}
				isSearchable={true}
			/>
		</div>
	);
}
