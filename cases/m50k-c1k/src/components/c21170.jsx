import React from 'react';
const LABEL_21170 = 'component_21170';
export function Component21170({ value = 21170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21170, 'data-value': derived.doubled }, children);
}
export default Component21170;
