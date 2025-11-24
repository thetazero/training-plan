import type { IntervalsRun } from '../../lib/intervals';
import { roundMiles } from '../../lib/utils';

interface IntervalsSummaryProps {
  run: IntervalsRun;
}

export function IntervalsSummary({ run }: IntervalsSummaryProps) {
  return (
    <div className="text-sm">
      <div className="font-medium text-red-400">Intervals</div>
      <div>{roundMiles(run.totalMiles())} miles total</div>
      <div className="text-xs text-gray-400">
        {run.warmupMiles}mi WU + intervals + {run.cooldownMiles}mi CD
      </div>
    </div>
  );
}