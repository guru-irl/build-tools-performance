import React from 'react';
const LABEL_33416 = 'component_33416';
export function Component33416({ value = 33416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33416, 'data-value': derived.doubled }, children);
}
export default Component33416;
