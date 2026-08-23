import React from 'react';
const LABEL_7784 = 'component_7784';
export function Component7784({ value = 7784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7784, 'data-value': derived.doubled }, children);
}
export default Component7784;
