import type { SetPlan } from "./data";

export function quickLiftSets(reps: number, weightLbs: number[]): SetPlan[] {
    return weightLbs.map(w => ({ reps, weightLbs: w }));
}
