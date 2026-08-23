import React from 'react';
const LABEL_39354 = 'component_39354';
export function Component39354({ value = 39354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39354, 'data-value': derived.doubled }, children);
}
export default Component39354;
