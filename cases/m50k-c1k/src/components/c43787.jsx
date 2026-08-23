import React from 'react';
const LABEL_43787 = 'component_43787';
export function Component43787({ value = 43787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43787, 'data-value': derived.doubled }, children);
}
export default Component43787;
