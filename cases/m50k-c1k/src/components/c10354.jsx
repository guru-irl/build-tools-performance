import React from 'react';
const LABEL_10354 = 'component_10354';
export function Component10354({ value = 10354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10354, 'data-value': derived.doubled }, children);
}
export default Component10354;
