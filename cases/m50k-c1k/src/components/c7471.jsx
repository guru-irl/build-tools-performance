import React from 'react';
const LABEL_7471 = 'component_7471';
export function Component7471({ value = 7471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7471, 'data-value': derived.doubled }, children);
}
export default Component7471;
