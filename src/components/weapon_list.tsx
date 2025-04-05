export default function WeaponList({ items }) {
	return (
		<div>
			<ul>
				{items.map((i) => (
					<li key={i.id}>{i.name}</li>
				))}
			</ul>
		</div >
	)
}

