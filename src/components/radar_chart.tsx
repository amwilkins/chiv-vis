import Chart from "react-apexcharts";

export default function Radarchart({ options, series }) {

	return (
		<div>
			<Chart options={options} type="radar" series={series} width="80%" />
		</div >
	);
}
