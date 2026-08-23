import React from 'react';
const LABEL_32787 = 'component_32787';
export function Component32787({ value = 32787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32787, 'data-value': derived.doubled }, children);
}
export default Component32787;
