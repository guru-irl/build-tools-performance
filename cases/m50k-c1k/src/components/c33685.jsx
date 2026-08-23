import React from 'react';
const LABEL_33685 = 'component_33685';
export function Component33685({ value = 33685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33685, 'data-value': derived.doubled }, children);
}
export default Component33685;
