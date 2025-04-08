import CardPage from "./page_cards";
import DescriptionPage from "./page_description";

export function TabContent({ activeTab, selectedOptions, setSelectedOptions }: { activeTab: string, selectedOptions: string[], setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>> }) {

	function getPage(page: string) {
		if (page == "Description") {
			return createDescriptionPage()
		}
		else {
			return createCardPage()
		}
	}

	function createCardPage() {
		return (
			<CardPage selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
		)
	}

	function createDescriptionPage() {
		return (
			<DescriptionPage />
		)
	}


	return (
		<div className="tab_container">
			<div className="column">
				{getPage(activeTab)}
			</div>
		</div>
	);
}

