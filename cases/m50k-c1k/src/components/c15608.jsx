import React from 'react';
const LABEL_15608 = 'component_15608';
export function Component15608({ value = 15608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15608, 'data-value': derived.doubled }, children);
}
export default Component15608;
