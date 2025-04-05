export default function ItemList({ items, clicked, searchQuery, query, handleClick }) {
	if (clicked) {
		return (
			items
				.filter((weapon: any) => {
					if (searchQuery === '') {
						return weapon;
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
		)
	}
	else {
		return null;
	}
}
