import React from 'react';
const LABEL_22174 = 'component_22174';
export function Component22174({ value = 22174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22174, 'data-value': derived.doubled }, children);
}
export default Component22174;
