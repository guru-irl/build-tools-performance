import React from 'react';
const LABEL_15633 = 'component_15633';
export function Component15633({ value = 15633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15633, 'data-value': derived.doubled }, children);
}
export default Component15633;
