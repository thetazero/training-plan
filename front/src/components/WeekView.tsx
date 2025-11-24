import type { WeekPlan } from '../lib/data';

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
            <div className="text-sm">
              {day.run && (
                <div>
                  <span className="font-medium">Miles: </span>
                  {day.run.totalMiles()}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Aggregate metrics row */}
      <div className="mt-4 border border-gray-700 bg-gray-800 rounded-lg p-4">
        <div className="font-semibold text-lg mb-2">Weekly Totals</div>
        <div className="text-sm">
          <span className="font-medium">Total Miles: </span>
          {plan.totalWeeklyMiles()}
        </div>
      </div>
    </div>
  );
}
