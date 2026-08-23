import React from 'react';
const LABEL_10471 = 'component_10471';
export function Component10471({ value = 10471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10471, 'data-value': derived.doubled }, children);
}
export default Component10471;
