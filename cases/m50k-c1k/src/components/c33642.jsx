import React from 'react';
const LABEL_33642 = 'component_33642';
export function Component33642({ value = 33642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33642, 'data-value': derived.doubled }, children);
}
export default Component33642;
