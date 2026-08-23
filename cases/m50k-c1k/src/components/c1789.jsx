import React from 'react';
const LABEL_1789 = 'component_1789';
export function Component1789({ value = 1789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1789, 'data-value': derived.doubled }, children);
}
export default Component1789;
