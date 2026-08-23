import React from 'react';
const LABEL_2328 = 'component_2328';
export function Component2328({ value = 2328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2328, 'data-value': derived.doubled }, children);
}
export default Component2328;
