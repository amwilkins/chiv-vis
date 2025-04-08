import { useState } from 'react';
import './App.css';
import { TabContent } from "./components/tabs";
import { TabButtons } from './components/tab_buttons';
import { pages } from './lib/types';
import GenerateAllStats from './lib/generateAllStats';

function App() {
	const [activeTab, setActiveTab] = useState(pages[0]);
	const [selectedOptions, setSelectedOptions] = useState(["Polehammer"]);

	// uncomment to rerun stats
	// GenerateAllStats();

	return (
		<>
			<h1>Chivarly 2 Weapon Analysis</h1>

			<TabButtons data={pages} activeTab={activeTab} setActiveTab={setActiveTab} />
			<TabContent activeTab={activeTab} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

		</ >
	)
}

export default App


