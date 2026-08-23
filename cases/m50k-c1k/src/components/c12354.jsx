import React from 'react';
const LABEL_12354 = 'component_12354';
export function Component12354({ value = 12354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12354, 'data-value': derived.doubled }, children);
}
export default Component12354;
