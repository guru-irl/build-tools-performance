import React from 'react';
const LABEL_1787 = 'component_1787';
export function Component1787({ value = 1787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1787, 'data-value': derived.doubled }, children);
}
export default Component1787;
