import React from 'react';
const LABEL_33461 = 'component_33461';
export function Component33461({ value = 33461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33461, 'data-value': derived.doubled }, children);
}
export default Component33461;
