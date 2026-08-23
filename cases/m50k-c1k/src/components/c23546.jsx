import React from 'react';
const LABEL_23546 = 'component_23546';
export function Component23546({ value = 23546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23546, 'data-value': derived.doubled }, children);
}
export default Component23546;
