import React from 'react';
const LABEL_1333 = 'component_1333';
export function Component1333({ value = 1333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1333, 'data-value': derived.doubled }, children);
}
export default Component1333;
