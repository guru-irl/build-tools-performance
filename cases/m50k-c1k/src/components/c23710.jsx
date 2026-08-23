import React from 'react';
const LABEL_23710 = 'component_23710';
export function Component23710({ value = 23710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23710, 'data-value': derived.doubled }, children);
}
export default Component23710;
