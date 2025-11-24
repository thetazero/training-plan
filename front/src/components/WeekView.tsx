import type { WeekPlan } from '../lib/data';
import { RunKind } from '../lib/data';
import type { EasyRun } from '../lib/data';
import type { IntervalsRun } from '../lib/intervals';
import { EasyRunSummary } from './summary/EasyRunSummary';
import { IntervalsSummary } from './summary/IntervalsSummary';
import { StridesSummary } from './summary/StridesSummary';
import { LiftSummary } from './summary/LiftSummary';
import { roundMiles } from '../lib/utils';

interface WeekViewProps {
  plan: WeekPlan;
}

export function WeekView({ plan }: WeekViewProps) {
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-2">
        {/* Day columns */}
        {plan.days.map((day, index) => (
          <div key={index} className="border border-gray-700 bg-gray-800 rounded-lg p-4">
            <div className="font-semibold text-lg mb-2">
              {dayNames[day.date.getDay()]}
            </div>
            <div className="text-sm text-gray-400 mb-3">
              {day.date.toLocaleDateString()}
            </div>
            <div>
              {day.run && (
                <>
                  {day.run.kind === RunKind.EASY && <EasyRunSummary run={day.run as EasyRun} />}
                  {day.run.kind === RunKind.INTERVALS && <IntervalsSummary run={day.run as IntervalsRun} />}
                  {day.run.kind === RunKind.TEMPO && (
                    <div className="text-sm">
                      <div className="font-medium text-green-400">Tempo Run</div>
                      <div>{day.run.totalMiles()} miles</div>
                    </div>
                  )}
                </>
              )}
              {day.strides && <StridesSummary strides={day.strides} />}
              {day.lift && <LiftSummary lift={day.lift} />}
            </div>
          </div>
        ))}
      </div>

      {/* Aggregate metrics row */}
      <div className="mt-4 border border-gray-700 bg-gray-800 rounded-lg p-4">
        <div className="font-semibold text-lg mb-2">Weekly Totals</div>
        <div className="text-sm">
          <span className="font-medium">Total Miles: </span>
          {roundMiles(plan.totalWeeklyMiles())}
        </div>
      </div>
    </div>
  );
}
