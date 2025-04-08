import { Weapon, ALL_WEAPONS } from "chivalry2-weapons";
import fs from 'vite-plugin-fs/browser';


export default function GenerateAllStats() {
	type AttackName = 'slash' | 'overhead' | 'stab';

	type ZScoredWeapon = Weapon & {
		attackZScores: {
			light: Record<AttackName, number>;
			heavy: Record<AttackName, number>;
		};
		rangeZScores: {
			range: Record<AttackName, number>;
			altRange: Record<AttackName, number>;
		};

	};

	function zscore(values: number[]): { mean: number; std: number; scores: number[] } {
		const mean = values.reduce((a, b) => a + b, 0) / values.length;
		const std = Math.sqrt(values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length);
		const scores = values.map((val) => (std === 0 ? 0 : (val - mean) / std));
		return { mean, std, scores };
	}

	function zscoreWeaponDamage(weapon: Weapon): ZScoredWeapon {
		const attacks = ['slash', 'overhead', 'stab'] as const;

		// Extract values
		const lightDamages = attacks.map((type) => weapon.attacks[type].light.damage);
		const heavyDamages = attacks.map((type) => weapon.attacks[type].heavy.damage);
		const ranges = attacks.map((type) => weapon.attacks[type].range);
		const altRanges = attacks.map((type) => weapon.attacks[type].altRange);

		// Z-score calculations
		const lightZ = zscore(lightDamages);
		const heavyZ = zscore(heavyDamages);
		const rangeZ = zscore(ranges);
		const altRangeZ = zscore(altRanges);

		// Map back to attack names
		const toRecord = (values: number[]) =>
			attacks.reduce((acc, type, i) => {
				acc[type] = values[i];
				return acc;
			}, {} as Record<AttackName, number>);

		return {
			...weapon,
			attackZScores: {
				light: toRecord(lightZ.scores),
				heavy: toRecord(heavyZ.scores),
			},
			rangeZScores: {
				range: toRecord(rangeZ.scores),
				altRange: toRecord(altRangeZ.scores),
			},
		};
	}

	const weapons: Weapon[] = ALL_WEAPONS;
	const scoredWeapons: ZScoredWeapon[] = weapons.map(zscoreWeaponDamage);

	fs.writeFile('scoredWeapons.json', JSON.stringify(scoredWeapons, null, 2));
}
