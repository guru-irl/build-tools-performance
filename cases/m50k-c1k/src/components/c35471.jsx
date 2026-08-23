import React from 'react';
const LABEL_35471 = 'component_35471';
export function Component35471({ value = 35471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35471, 'data-value': derived.doubled }, children);
}
export default Component35471;
