import React from 'react';
const LABEL_21354 = 'component_21354';
export function Component21354({ value = 21354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21354, 'data-value': derived.doubled }, children);
}
export default Component21354;
