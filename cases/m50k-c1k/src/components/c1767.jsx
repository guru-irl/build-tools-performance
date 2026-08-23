import React from 'react';
const LABEL_1767 = 'component_1767';
export function Component1767({ value = 1767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1767, 'data-value': derived.doubled }, children);
}
export default Component1767;
