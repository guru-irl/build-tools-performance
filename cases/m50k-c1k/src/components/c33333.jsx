import React from 'react';
const LABEL_33333 = 'component_33333';
export function Component33333({ value = 33333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33333, 'data-value': derived.doubled }, children);
}
export default Component33333;
