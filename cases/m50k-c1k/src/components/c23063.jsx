import React from 'react';
const LABEL_23063 = 'component_23063';
export function Component23063({ value = 23063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23063, 'data-value': derived.doubled }, children);
}
export default Component23063;
