export default function Toolbar({ items, weapon, setWeapon }) {
	return (
		<div>
			<select
				value={weapon}
				onChange={e => setWeapon(e.target.value)}>
				{items.map((i) => (
					<option key={i} value={i}>{i}</option>
				))}
			</select>

		</div>
	);
}

