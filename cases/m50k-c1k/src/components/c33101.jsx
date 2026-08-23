import React from 'react';
const LABEL_33101 = 'component_33101';
export function Component33101({ value = 33101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33101, 'data-value': derived.doubled }, children);
}
export default Component33101;
