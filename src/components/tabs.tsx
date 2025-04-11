import CardPage from "./page_cards";
import DescriptionPage from "./page_description";
import TimingsPage from "./page_timings";

export function TabContent({ activeTab, selectedOptions, setSelectedOptions }: { activeTab: string, selectedOptions: string[], setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>> }) {

	function getPage(page: string) {
		if (page == "Description") {
			return (
				<DescriptionPage />
			)
		}
		else if (page == "Timings") {
			return (
				<TimingsPage selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} activeTab={activeTab} />)
		}
		else {
			return (
				<CardPage selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} activeTab={activeTab} />
			)
		}
	}


	return (
		<div className="tab_container">
			{getPage(activeTab)}
		</div>
	);
}

