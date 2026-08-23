import React from 'react';
const LABEL_22123 = 'component_22123';
export function Component22123({ value = 22123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22123, 'data-value': derived.doubled }, children);
}
export default Component22123;
