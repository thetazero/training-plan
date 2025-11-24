import type { Run } from './data';
import { RunKind } from './data';

export class Rep {
    distance: number; // in meters
    goalTime: number; // in seconds

    constructor(distance: number, goalTime: number) {
        this.distance = distance;
        this.goalTime = goalTime;
    }
}

export class Rest {
    time?: number; // in seconds
    distance?: number; // in meters

    constructor(time?: number, distance?: number) {
        this.time = time;
        this.distance = distance;
    }

    // Helper method to check if rest is defined
    isDefined(): boolean {
        return this.time !== undefined || this.distance !== undefined;
    }
}

export class Set {
    items: (Rep | Rest)[]; // List can contain either reps or rest periods

    constructor(items: (Rep | Rest)[]) {
        this.items = items;
    }

    // Calculate total distance for all reps in this set
    totalDistance(): number {
        return this.items
            .filter((item): item is Rep => item instanceof Rep)
            .reduce((total, rep) => total + rep.distance, 0);
    }
}

export class IntervalsRun implements Run {
    warmupMiles: number;
    items: (Set | Rest)[]; // List can contain either sets or rest periods
    cooldownMiles: number;
    kind: RunKind = RunKind.INTERVALS;

    constructor(
        warmupMiles: number,
        items: (Set | Rest)[],
        cooldownMiles: number
    ) {
        this.warmupMiles = warmupMiles;
        this.items = items;
        this.cooldownMiles = cooldownMiles;
    }

    // Calculate total miles including warmup, intervals, and cooldown
    totalMiles(): number {
        return this.warmupMiles + this.intervalMiles() / 1609.34 + this.cooldownMiles;
    }

    // Calculate total interval distance (without warmup/cooldown)
    intervalMiles(): number {
        return this.items
            .filter((item): item is Set => item instanceof Set)
            .reduce((total, set) => total + set.totalDistance(), 0);
    }
}
