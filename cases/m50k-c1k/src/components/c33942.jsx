import React from 'react';
const LABEL_33942 = 'component_33942';
export function Component33942({ value = 33942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33942, 'data-value': derived.doubled }, children);
}
export default Component33942;
