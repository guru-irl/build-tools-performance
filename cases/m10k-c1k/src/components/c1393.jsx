import React from 'react';
const LABEL_1393 = 'component_1393';
export function Component1393({ value = 1393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1393, 'data-value': derived.doubled }, children);
}
export default Component1393;
