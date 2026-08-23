import React from 'react';
const LABEL_38477 = 'component_38477';
export function Component38477({ value = 38477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38477, 'data-value': derived.doubled }, children);
}
export default Component38477;
