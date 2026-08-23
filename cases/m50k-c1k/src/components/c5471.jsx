import React from 'react';
const LABEL_5471 = 'component_5471';
export function Component5471({ value = 5471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5471, 'data-value': derived.doubled }, children);
}
export default Component5471;
