import React from 'react';
const LABEL_21101 = 'component_21101';
export function Component21101({ value = 21101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21101, 'data-value': derived.doubled }, children);
}
export default Component21101;
