import React from 'react';
const LABEL_22063 = 'component_22063';
export function Component22063({ value = 22063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22063, 'data-value': derived.doubled }, children);
}
export default Component22063;
