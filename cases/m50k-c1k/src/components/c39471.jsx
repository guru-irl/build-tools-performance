import React from 'react';
const LABEL_39471 = 'component_39471';
export function Component39471({ value = 39471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39471, 'data-value': derived.doubled }, children);
}
export default Component39471;
