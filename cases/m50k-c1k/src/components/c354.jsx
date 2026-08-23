import React from 'react';
const LABEL_354 = 'component_354';
export function Component354({ value = 354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_354, 'data-value': derived.doubled }, children);
}
export default Component354;
