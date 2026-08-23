import React from 'react';
const LABEL_15552 = 'component_15552';
export function Component15552({ value = 15552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15552, 'data-value': derived.doubled }, children);
}
export default Component15552;
