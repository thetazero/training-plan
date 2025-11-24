import type { LiftPlan } from '../../lib/data';

interface LiftSummaryProps {
  lift: LiftPlan;
}

export function LiftSummary({ lift }: LiftSummaryProps) {
  const exerciseCount = lift.exercises.size;

  return (
    <div className="text-sm mt-2">
      <div className="font-medium text-yellow-400">Lift</div>
      <div>{exerciseCount} exercises</div>
    </div>
  );
}