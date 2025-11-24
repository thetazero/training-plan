import { EasyRun, WeekPlan } from "./data";
import { IntervalsRun, Rep, Rest, Set } from "./intervals";

export const week0: WeekPlan = new WeekPlan([
    {
        date: new Date("2025-11-24"),
        run: new EasyRun(3),
    },
    {
        date: new Date("2025-11-25"),
        run: new IntervalsRun(
            1.5,
            [
                new Set([
                    new Rep(200, 32),
                    new Rest(undefined, 200),
                    new Rep(200, 30)
                ])
            ],
            1
        )
    },
    {
        date: new Date("2025-11-26"),
        run: new EasyRun(3),
    },
    {
        date: new Date("2025-11-27"),
        run: new EasyRun(5),
    },
    {
        date: new Date("2025-11-28"),
        run: new EasyRun(5),
    },
    {
        date: new Date("2025-11-29"),
    },
    {
        date: new Date("2025-11-30"),
        run: new EasyRun(5),
    }
]);
