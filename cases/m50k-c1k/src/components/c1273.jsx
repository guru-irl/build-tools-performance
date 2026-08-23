import React from 'react';
const LABEL_1273 = 'component_1273';
export function Component1273({ value = 1273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1273, 'data-value': derived.doubled }, children);
}
export default Component1273;
