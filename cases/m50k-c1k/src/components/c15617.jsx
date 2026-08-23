import React from 'react';
const LABEL_15617 = 'component_15617';
export function Component15617({ value = 15617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15617, 'data-value': derived.doubled }, children);
}
export default Component15617;
