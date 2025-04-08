

export function TabButtons({ data, activeTab, setActiveTab }: { data: string[], activeTab: string, setActiveTab: React.Dispatch<React.SetStateAction<string>> }) {
	return (
		<div className="tab_header">
			{data.map((item, index) => (
				<li
					className={`${item === activeTab && "active"} tab_button`}
					key={index}
					onClick={() => setActiveTab(item)}>
					{item}
				</li>
			))}
		</div>
	);
}
