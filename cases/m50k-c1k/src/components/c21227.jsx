import React from 'react';
const LABEL_21227 = 'component_21227';
export function Component21227({ value = 21227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21227, 'data-value': derived.doubled }, children);
}
export default Component21227;
