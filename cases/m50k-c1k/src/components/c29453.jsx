import React from 'react';
const LABEL_29453 = 'component_29453';
export function Component29453({ value = 29453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29453, 'data-value': derived.doubled }, children);
}
export default Component29453;
