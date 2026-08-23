import React from 'react';
const LABEL_3562 = 'component_3562';
export function Component3562({ value = 3562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3562, 'data-value': derived.doubled }, children);
}
export default Component3562;
