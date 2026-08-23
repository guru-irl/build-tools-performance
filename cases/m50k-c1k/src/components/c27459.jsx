import React from 'react';
const LABEL_27459 = 'component_27459';
export function Component27459({ value = 27459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27459, 'data-value': derived.doubled }, children);
}
export default Component27459;
