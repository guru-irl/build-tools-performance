import React from 'react';
const LABEL_7787 = 'component_7787';
export function Component7787({ value = 7787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7787, 'data-value': derived.doubled }, children);
}
export default Component7787;
