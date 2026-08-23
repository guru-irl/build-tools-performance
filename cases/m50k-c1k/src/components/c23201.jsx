import React from 'react';
const LABEL_23201 = 'component_23201';
export function Component23201({ value = 23201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23201, 'data-value': derived.doubled }, children);
}
export default Component23201;
