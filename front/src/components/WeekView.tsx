import type { DayPlan } from '../lib/data';

interface WeekViewProps {
  days: DayPlan[];
}

export function WeekView({ days }: WeekViewProps) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-7 gap-2 min-w-max">
        {/* Day columns */}
        {days.map((day, index) => (
          <div key={index} className="border border-gray-700 bg-gray-800 rounded-lg p-4 min-w-32">
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
        <div className="grid grid-cols-7 gap-2">
          {days.map((_, index) => (
            <div key={index} className="min-w-32">
              {/* Empty for now */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
