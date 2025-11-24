import type { EasyRun } from '../../lib/data';

interface EasyRunSummaryProps {
  run: EasyRun;
}

export function EasyRunSummary({ run }: EasyRunSummaryProps) {
  return (
    <div className="text-sm">
      <div className="font-medium text-blue-400">Easy Run</div>
      <div>{run.miles} miles</div>
    </div>
  );
}