import { EasyRun, Exercise, WeekPlan, TempoRun, Strides } from "./data";
import { IntervalsRun, Rep, Rest, Set } from "./intervals";
import { quickLiftSets } from "./util";

export const week0: WeekPlan = new WeekPlan([
    {
        date: new Date("2025-11-24"),
        run: new EasyRun(3),
        strides: new Strides(3, 100),
        lift: {
            exercises: new Map(
                [
                    [
                        Exercise.BulgarianSplitSquat,
                        quickLiftSets(8, [40, 60, 70])
                    ],
                    [
                        Exercise.Deadlift,
                        quickLiftSets(8, [95, 115])
                    ],
                    [
                        Exercise.TibBar,
                        quickLiftSets(12, [25, 25, 25])
                    ],
                    [
                        Exercise.SingleLegCalfRaise,
                        quickLiftSets(10, [40, 50])
                    ]
                ]
            )
        }
    },
    {
        date: new Date("2025-11-25"),
        run: new IntervalsRun(
            1.7,
            [
                new Set([
                    new Rep(200, 34),
                    new Rest(undefined, 200),
                    new Rep(200, 32),
                    new Rest(undefined, 200),
                    new Rep(200, 31),
                ])
            ],
            1.7
        )
    },
    {
        date: new Date("2025-11-26"),
        run: new EasyRun(3),
        lift: {
            exercises: new Map(
                [
                    [
                        Exercise.DumbbellInclineBench,
                        quickLiftSets(8, [50, 70, 80])
                    ],
                    [
                        Exercise.BicepCurl,
                        quickLiftSets(8, [30, 40, 50])
                    ],
                    [
                        Exercise.OverheadPress,
                        quickLiftSets(8, [50, 60])
                    ],
                    [
                        Exercise.Pullup,
                        quickLiftSets(6, [0, 0, 0])
                    ],
                    [
                        Exercise.DumbbellRow,
                        quickLiftSets(12, [35, 40])
                    ],
                ]
            )
        }
    },
    {
        date: new Date("2025-11-27"),
        run: new EasyRun(3.5),
        lift: {
            exercises: new Map(
                [
                    [
                        Exercise.BulgarianSplitSquat,
                        quickLiftSets(8, [40, 60, 70])
                    ],
                    [
                        Exercise.Deadlift,
                        quickLiftSets(8, [95, 115])
                    ],
                    [
                        Exercise.DumbbellRow,
                        quickLiftSets(12, [35, 40])
                    ],
                    [
                        Exercise.Pullup,
                        quickLiftSets(6, [40, 50])
                    ]
                ]
            )
        }
    },
    {
        date: new Date("2025-11-28"),
        run: new TempoRun(1, 2, 1),
    },
    {
        date: new Date("2025-11-29"),
        run: new EasyRun(3),
        lift: {
            exercises: new Map(
                [
                    [
                        Exercise.DumbbellInclineBench,
                        quickLiftSets(8, [50, 70, 70])
                    ],
                    [
                        Exercise.BicepCurl,
                        quickLiftSets(8, [30, 40, 40])
                    ],
                    [
                        Exercise.OverheadPress,
                        quickLiftSets(8, [50, 50])
                    ],
                    [
                        Exercise.Pullup,
                        quickLiftSets(6, [0, 0])
                    ],
                    [
                        Exercise.DumbbellRow,
                        quickLiftSets(12, [35, 35])
                    ],
                ]
            )
        }
    },
    {
        date: new Date("2025-11-30"),
        run: new EasyRun(3.5),
        strides: new Strides(3, 100),
    }
]);
