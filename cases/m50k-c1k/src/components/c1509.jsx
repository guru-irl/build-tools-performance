import React from 'react';
const LABEL_1509 = 'component_1509';
export function Component1509({ value = 1509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1509, 'data-value': derived.doubled }, children);
}
export default Component1509;
