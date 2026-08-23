import React from 'react';
const LABEL_2605 = 'component_2605';
export function Component2605({ value = 2605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2605, 'data-value': derived.doubled }, children);
}
export default Component2605;
