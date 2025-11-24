import type { IntervalsRun } from '../../lib/intervals';
import { Rep, Rest, Set } from '../../lib/intervals';

interface IntervalsSummaryProps {
  run: IntervalsRun;
}

export function IntervalsSummary({ run }: IntervalsSummaryProps) {
  const lines: string[] = [];

  if (run.warmupMiles > 0) {
    lines.push(`${run.warmupMiles}mi WU`);
  }

  // Format each set and rest
  run.items.forEach(item => {
    if (item instanceof Set) {
      const setItems: string[] = [];
      item.items.forEach(subItem => {
        if (subItem instanceof Rep) {
          setItems.push(`${subItem.distance}m (${subItem.goalTime})`);
        } else if (subItem instanceof Rest) {
          if (subItem.distance) {
            setItems.push(`${subItem.distance}m jog`);
          } else if (subItem.time) {
            setItems.push(`${subItem.time}s rest`);
          }
        }
      });
      lines.push(setItems.join(', '));
    } else if (item instanceof Rest) {
      if (item.distance) {
        lines.push(`${item.distance}m jog`);
      } else if (item.time) {
        lines.push(`${item.time}s rest`);
      }
    }
  });

  if (run.cooldownMiles > 0) {
    lines.push(`${run.cooldownMiles}mi CD`);
  }

  return (
    <div className="text-sm space-y-0.5">
      {lines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </div>
  );
}
