import React from 'react';
const LABEL_15685 = 'component_15685';
export function Component15685({ value = 15685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15685, 'data-value': derived.doubled }, children);
}
export default Component15685;
