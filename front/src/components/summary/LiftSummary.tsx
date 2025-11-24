import type { LiftPlan, Exercise, SetPlan } from '../../lib/data';

interface LiftSummaryProps {
  lift: LiftPlan;
}

export function LiftSummary({ lift }: LiftSummaryProps) {
  const formatExercise = (exercise: Exercise, sets: SetPlan[]): string => {
    const hasWeight = sets.some(set => set.weightLbs > 0);

    if (hasWeight) {
      // Format: 8x40, 8x70
      const setsStr = sets.map(set => `${set.reps}x${set.weightLbs}`).join(', ');
      return `${exercise}: ${setsStr}`;
    } else {
      // Format: 8,8,8
      const setsStr = sets.map(set => set.reps).join(',');
      return `${exercise}: ${setsStr}`;
    }
  };

  return (
    <div className="text-sm mt-2">
      <div className="font-medium text-yellow-400">Lift</div>
      <div className="space-y-1">
        {Array.from(lift.exercises.entries()).map(([exercise, sets]) => (
          <div key={exercise} className="text-xs">
            {formatExercise(exercise, sets)}
          </div>
        ))}
      </div>
    </div>
  );
}