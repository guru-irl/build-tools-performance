import React from 'react';
const LABEL_29685 = 'component_29685';
export function Component29685({ value = 29685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29685, 'data-value': derived.doubled }, children);
}
export default Component29685;
