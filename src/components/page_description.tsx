// import stats from '../scoredWeapons.json';
import WeaponCard from './weapon_card';

// TODO: Format this text so it's easier to read.
// and rewrite it a few times.


export default function DescriptionPage({ }) {

	return (
		<div className='text'>


			<p>
				This site is an ongoing project to visualize and analyze weapon data from Chivarly 2,
				heavily inspired by
				<a href="polehammer.com"> polehammer.com. </a>
			</p>

			<p>
				Values for Damage and Speed are standardized using the z-scores, calculated from values within a single weapon
				to remove inter-weapon interactions. This provides us a standard measurement for
				the speed and damage of the three standard attacks (slash, overhead, stab) as they compare within an individual weapon.
			</p>
			<p>
				For example:
			</p>
			<WeaponCard key={1} weapon={"Polehammer"} activeTab="Damage" />

			<p>
				This is the damage card for the Polehammer.
				We can see the Average Damage for light and heavy attack, and the z-score for each attack as it relates to the average above it.
			</p>

			<p>
				From this we see that in the Polehammer's light attacks:
			</p>
			<ul>
				<li>
					Overhead damage is 1.22 standard deviations above it's average light attack damage,
				</li>
				<li>
					Slash does the average amount of damage,
				</li>
				<li>
					Stab damage is 1.22 SD's below the average damage.
				</li>
			</ul>
			<sub>Note: actual light damage numbers are slash:45, overhead:50, and stab:40</sub>
			<p>
			</p>

			<p>
				This means that the overhead is the most damaging light attack, followed by the slash, and the stab is the least damaging.
				This isn't wildly interesting on it's own, however looking at the heavy attacks we see that there is a different pattern:
			</p>
			<ul>
				<li>
					Overhead damage is 1.41
				</li>
				<li>
					Slash damage is lower than the average damage
				</li>
				<li>
					Stab damage matches slash damage
				</li>
			</ul>
			<sub>Note: actual light damage numbers are slash:60, overhead:70, and stab:60</sub>
			<p>
			</p>
			<p>
				From this we can say a few things:
			</p>
			<ul>
				<li>
					Judging by damage, the Polehammer is a Overhead focused weapon
				</li>
				<li>
					The heavy slash is weaker than expected
				</li>
			</ul>

			<p>
				However this data is just a small part of understanding a weapons data characteristics.
				Check out the Range and Speed pages to see if there are other reasons to utilize the weaker attacks,
				and compare the Polehammer against other weapons on
				<a href="polehammer.com"> polehammer.com. </a>
			</p>

		</div >
	);
}
