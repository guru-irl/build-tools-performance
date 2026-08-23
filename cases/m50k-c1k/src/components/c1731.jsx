import React from 'react';
const LABEL_1731 = 'component_1731';
export function Component1731({ value = 1731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1731, 'data-value': derived.doubled }, children);
}
export default Component1731;
