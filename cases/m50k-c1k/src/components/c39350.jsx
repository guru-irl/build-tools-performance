import React from 'react';
const LABEL_39350 = 'component_39350';
export function Component39350({ value = 39350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39350, 'data-value': derived.doubled }, children);
}
export default Component39350;
