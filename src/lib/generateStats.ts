import { std } from "mathjs";
import { zscore } from "jstat";

import { Weapon } from "chivalry2-weapons";
import { WeaponDamage, WeaponRange, WeaponStats } from "./types";
import { ALL_WEAPONS } from "chivalry2-weapons";

export default function generateStats(selectedWeapon: string): WeaponStats {

	let weapon: Weapon = ALL_WEAPONS.find(i => i.name === selectedWeapon);

	let RangeSD = std([weapon.attacks.slash.range, weapon.attacks.stab.range, weapon.attacks.overhead.range]);
	let altRangeSD = std([weapon.attacks.slash.altRange, weapon.attacks.stab.altRange, weapon.attacks.overhead.altRange]);

	let heavyDamageSD = std([weapon.attacks.slash.heavy.damage, weapon.attacks.stab.heavy.damage, weapon.attacks.overhead.heavy.damage]);
	let lightDamageSD = std([weapon.attacks.slash.light.damage, weapon.attacks.stab.light.damage, weapon.attacks.overhead.light.damage]);

	const damage: WeaponDamage = {
		hAvg: weapon.attacks.average.heavy.damage,
		hSlash: zscore(weapon.attacks.slash.heavy.damage, weapon.attacks.average.heavy.damage, heavyDamageSD),
		hOverhead: zscore(weapon.attacks.overhead.heavy.damage, weapon.attacks.average.heavy.damage, heavyDamageSD),
		hStab: zscore(weapon.attacks.stab.heavy.damage, weapon.attacks.average.heavy.damage, heavyDamageSD),

		lAvg: weapon.attacks.average.light.damage,
		lSlash: zscore(weapon.attacks.slash.light.damage, weapon.attacks.average.light.damage, lightDamageSD),
		lOverhead: zscore(weapon.attacks.overhead.light.damage, weapon.attacks.average.light.damage, lightDamageSD),
		lStab: zscore(weapon.attacks.stab.light.damage, weapon.attacks.average.light.damage, lightDamageSD),
	}

	const range: WeaponRange = {
		avg: weapon.attacks.average.range,
		slash: zscore(weapon.attacks.slash.range, weapon.attacks.average.range, RangeSD),
		overhead: zscore(weapon.attacks.overhead.range, weapon.attacks.average.range, RangeSD),
		stab: zscore(weapon.attacks.stab.range, weapon.attacks.average.range, RangeSD),

		altAvg: weapon.attacks.average.altRange,
		altSlash: zscore(weapon.attacks.slash.altRange, weapon.attacks.average.altRange, altRangeSD),
		altOverhead: zscore(weapon.attacks.overhead.altRange, weapon.attacks.average.altRange, altRangeSD),
		altStab: zscore(weapon.attacks.stab.altRange, weapon.attacks.average.altRange, altRangeSD),
	}

	// const stats: WeaponStats = {
	// 	damage,
	// 	range
	// }

	return {
		damage: damage,
		range: range,
	}
}
