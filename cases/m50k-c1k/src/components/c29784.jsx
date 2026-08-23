import React from 'react';
const LABEL_29784 = 'component_29784';
export function Component29784({ value = 29784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29784, 'data-value': derived.doubled }, children);
}
export default Component29784;
