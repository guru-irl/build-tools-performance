import React from 'react';
const LABEL_22101 = 'component_22101';
export function Component22101({ value = 22101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22101, 'data-value': derived.doubled }, children);
}
export default Component22101;
