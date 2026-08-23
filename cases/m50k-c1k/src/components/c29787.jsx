import React from 'react';
const LABEL_29787 = 'component_29787';
export function Component29787({ value = 29787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29787, 'data-value': derived.doubled }, children);
}
export default Component29787;
