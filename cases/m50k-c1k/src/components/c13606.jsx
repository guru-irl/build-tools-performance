import React from 'react';
const LABEL_13606 = 'component_13606';
export function Component13606({ value = 13606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13606, 'data-value': derived.doubled }, children);
}
export default Component13606;
