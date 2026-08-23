import React from 'react';
const LABEL_21759 = 'component_21759';
export function Component21759({ value = 21759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21759, 'data-value': derived.doubled }, children);
}
export default Component21759;
