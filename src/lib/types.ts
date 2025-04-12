export interface WeaponDamage {
	[key: string]: number;
}

export interface WeaponRange {
	[key: string]: number;
}

export interface WeaponStats {
	damage: WeaponDamage,
	range: WeaponRange
}

export const keyMap: { [key: string]: string } = {
	hAvg: "Heavy Average",
	hSlash: "Heavy Slash",
	hOverhead: "Heavy Overhead",
	hStab: "Heavy Stab",

	lAvg: "Light Average",
	lSlash: "Light Slash",
	lOverhead: "Light Overhead",
	lStab: "Light Stab",

	avg: "Average Attack",
	slash: "Slash",
	overhead: "Overhead",
	stab: "Stab",

	altAvg: "Alt Average",
	altSlash: "Alt Slash",
	altOverhead: "Alt Overhead",
	altStab: "Alt Stab",

}

export type StatsType = "Light Attack" | "Heavy Attack" | "Range" | "Alt Range" | "Light Timings" | "Heavy Timings"
export type AttackType = "Slash" | "Overhead" | "Stab"
export type TimingType = "Attack" | "Combo" | "Ripost" | "Fast Thwack" | "Thwack"

export const pages = ["Timings", "Damage", "Range", "Description"]

