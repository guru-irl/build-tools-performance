import React from 'react';
const LABEL_1709 = 'component_1709';
export function Component1709({ value = 1709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1709, 'data-value': derived.doubled }, children);
}
export default Component1709;
