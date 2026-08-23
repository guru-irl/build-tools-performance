import React from 'react';
const LABEL_17348 = 'component_17348';
export function Component17348({ value = 17348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17348, 'data-value': derived.doubled }, children);
}
export default Component17348;
