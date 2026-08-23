import React from 'react';
const LABEL_1354 = 'component_1354';
export function Component1354({ value = 1354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1354, 'data-value': derived.doubled }, children);
}
export default Component1354;
