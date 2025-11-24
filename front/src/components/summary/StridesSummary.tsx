import type { Strides } from '../../lib/data';

interface StridesSummaryProps {
  strides: Strides;
}

export function StridesSummary({ strides }: StridesSummaryProps) {
  return (
    <div className="text-sm mt-2">
      <div className="font-medium text-purple-400">Strides</div>
      <div>{strides.count}x {strides.durationMeters}m</div>
    </div>
  );
}