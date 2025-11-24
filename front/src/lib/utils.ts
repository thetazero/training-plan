export function roundMiles(miles: number, decimals: number = 1): number {
  return Math.round(miles * Math.pow(10, decimals)) / Math.pow(10, decimals);
}