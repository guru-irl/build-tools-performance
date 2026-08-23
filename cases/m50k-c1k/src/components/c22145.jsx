import React from 'react';
const LABEL_22145 = 'component_22145';
export function Component22145({ value = 22145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22145, 'data-value': derived.doubled }, children);
}
export default Component22145;
