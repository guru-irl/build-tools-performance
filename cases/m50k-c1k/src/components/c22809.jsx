import React from 'react';
const LABEL_22809 = 'component_22809';
export function Component22809({ value = 22809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22809, 'data-value': derived.doubled }, children);
}
export default Component22809;
