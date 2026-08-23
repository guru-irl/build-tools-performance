import React from 'react';
const LABEL_1496 = 'component_1496';
export function Component1496({ value = 1496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1496, 'data-value': derived.doubled }, children);
}
export default Component1496;
