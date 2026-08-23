import React from 'react';
const LABEL_1762 = 'component_1762';
export function Component1762({ value = 1762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1762, 'data-value': derived.doubled }, children);
}
export default Component1762;
