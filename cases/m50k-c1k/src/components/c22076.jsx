import React from 'react';
const LABEL_22076 = 'component_22076';
export function Component22076({ value = 22076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22076, 'data-value': derived.doubled }, children);
}
export default Component22076;
