import React from 'react';
const LABEL_15778 = 'component_15778';
export function Component15778({ value = 15778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15778, 'data-value': derived.doubled }, children);
}
export default Component15778;
